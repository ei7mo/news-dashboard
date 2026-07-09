import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [articles, setArticles] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              country="us"
              category="general"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/business"
          element={
            <Home
              country="us"
              category="business"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <Home
              country="us"
              category="entertainment"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/general"
          element={
            <Home
              country="us"
              category="general"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/health"
          element={
            <Home
              country="us"
              category="health"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/science"
          element={
            <Home
              country="us"
              category="science"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <Home
              country="us"
              category="sports"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <Home
              country="us"
              category="technology"
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
