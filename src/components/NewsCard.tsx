import { Link } from "react-router-dom";
import type { Article } from "../types/articles";

function NewsCard({ article }: { article: Article }) {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300 ">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover bg-gray-400"
      />
      <div className="p-4">
        <Link to={article.url}>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            {article.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {article.description?.length > 100
            ? article.description.slice(0, 100) + "..."
            : article.description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>By {article.author || "Unknown Author"}</span>
          <span> • </span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="mt-1 text-xs text-blue-500 font-medium">
          Source: {article.source.name}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
