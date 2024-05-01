export const ApiKey = "932a108ef76a428aa4535033c82e14db";

const currentDate = new Date();

export const parseCurrentDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  currentDate.getDate().toString().padStart(2, "0");

const previousWeek = new Date();
previousWeek.setDate(currentDate.getDate() - 7);

export const parsePreviousWeek =
  previousWeek.getFullYear() +
  "/" +
  (previousWeek.getMonth() + 1).toString().padStart(2, "0") +
  "/" +
  previousWeek.getDate().toString().padStart(2, 0);

export const getSavedArticles = () => {
  const savedArticles = localStorage.getItem(ApiKey);
  return savedArticles ? JSON.parse(savedArticles) : [];
};

export const saveArticle = (newArticle) => {
  const savedArticles = getSavedArticles();
  const articlesExist = savedArticles.some(
    (article) => article.title === newArticle.title
  );

  if (!articlesExist) {
    const updatedArticles = [...savedArticles, newArticle];
    localStorage.setItem(ApiKey, JSON.stringify(updatedArticles));
  }
};

export const deleteArticle = (article) => {
  const savedArticles = getSavedArticles();
  return savedArticles.some(
    (savedArticle) => savedArticle.title === article.title
  );
};

export const isArticleSaved = (article) => {
  const savedArticles = getSavedArticles();
  return savedArticles.some(
    (savedArticles) => savedArticles.title === article.title
  );
};
