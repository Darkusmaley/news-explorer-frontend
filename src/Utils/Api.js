import { checkResponse } from "./CheckResponse";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.marcusnewsexplorer.jumpingcrab.com"
    : "http://localHost:3001";

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");

  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addSavedArticles = (newsData, keyword) => {
  const token = localStorage.getItem("jwt");

  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newsData.title,
      text: newsData.description,
      date: newsData.publishedAt,
      source: newsData.source.name,
      link: newsData.url,
      image: newsData.urlToImage,
      keyword: keyword,
    }),
  });
};

export const removeSavedArticles = (article) => {
  const token = localStorage.getItem("jwt");

  return request(`${baseUrl}/articles/${article._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
