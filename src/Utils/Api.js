import { checkResponse } from "./CheckResponse";

export const baseUrl = "http://localHost:3001";

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const addSavedArticles = (newsData, keyword) => {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/articles`, {
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
  }).then(checkResponse);
};

export const removeSavedArticles = (article) => {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/articles/${article._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
