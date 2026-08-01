import type { Article } from "../types/articles";

const handleResponse = async (res: Response) => {
  const contentType = res.headers.get("content-type") || "application/json";
  const text = await res.text();
  if (!res.ok) {
    let body = text;
    try {
      body = JSON.parse(text);
    } catch {
      throw new Error(`HTTP ${res.status} - ${JSON.stringify(body)}`);
    }
  }
  if (contentType.includes("application/json")) return JSON.parse(text);
  return text;
};

export const fetchAllNews = async (
  country: string,
  category: string,
  setArticles: (articles: Article[]) => void,
  setLoading?: (loading: boolean) => void,
) => {
  setLoading?.(true);
  try {
    const res = await fetch(
      `/api/news?mode=top-headlines&country=${encodeURIComponent(
        country,
      )}&category=${encodeURIComponent(category)}`,
    );
    const data = await handleResponse(res);
    setArticles(data.articles ?? []);
  } catch (err) {
    console.error("fetchAllNews error:", err);
    setArticles([]);
  } finally {
    setLoading?.(false);
  }
};

export const fetchSearchNews = async (
  search: string,
  setArticles: (articles: Article[]) => void,
) => {
  try {
    const res = await fetch(
      `/api/news?mode=search&q=${encodeURIComponent(search)}`,
    );
    const data = await handleResponse(res);
    setArticles(data.articles ?? []);
  } catch (err) {
    console.error("fetchSearchNews error:", err);
    setArticles([]);
  }
};
