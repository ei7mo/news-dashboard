import type { Article } from "../types/articles";

export const fetchAllNews = async (
  country: string,
  category: string,
  articles: Article[],
  setArticles: (articles: Article[]) => void,
  setLoading: (loading: boolean) => void,
) => {
  try {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`,
    );
    const data = await response.json();

    setArticles(data.articles ?? []);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export const fetchSearchNews = async (
  search: string,
  setArticles: (articles: Article[]) => void,
) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`,
    );
    const data = await response.json();

    setArticles(data.articles ?? []);
  } catch (err) {
    console.log(err);
  }
};
