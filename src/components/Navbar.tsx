import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { fetchAllNews, fetchSearchNews } from "../apis/api";

const LINKS = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

function Navbar({ setArticles }: { setArticles: (articles: any[]) => void }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (!search.trim()) {
      const category =
        location.pathname === "/" ? "general" : location.pathname.slice(1);
      fetchAllNews("us", category, [], setArticles);
      return;
    }
    fetchSearchNews(search, setArticles);
  };

  return (
    <div className="fixed w-full bg-white dark:bg-blue-900 z-10 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <div className="md:text-2xl text-lg font-bold text-blue-600 dark:text-gray-100 cursor-pointer">
            News Dashboard
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {LINKS.map((link) => (
            <Link
              to={`/${link.toLowerCase()}`}
              key={link}
              className="text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-blue-600 transition cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative bg-gray-200 p-2 rounded-lg">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"></i>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search news..."
              className="md:pl-10 pl-7 w-30 md:w-64 outline-none focus:outline-none"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-blue-500 dark:text-gray-200 px-3 py-2 rounded-lg cursor-pointer"
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden dark:text-gray-200"
          >
            {open ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xl"></i>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          {LINKS.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-blue-600 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
