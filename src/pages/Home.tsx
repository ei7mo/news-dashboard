import { useEffect, useState } from "react";
import { fetchAllNews } from "../apis/api";
import type { Article } from "../types/articles";
import NewsCard from "../components/NewsCard";

function Home({
  country,
  category,
  articles,
  setArticles,
}: {
  country: string;
  category: string;
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllNews(country, category, articles, setArticles, setLoading);
  }, [category]);

  return (
    <>
      {loading ? (
        <div className="bg-gray-200 dark:bg-gray-800 h-screen flex flex-col gap-3 items-center justify-center">
          <i className="fa-solid fa-spinner h-12 w-12 animate-spin dark:text-gray-200"></i>
          <h1 className="text-gray-800 text-xl font-semibold dark:text-gray-200">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
            {articles.map((article, index) => {
              return <NewsCard key={index} article={article} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
