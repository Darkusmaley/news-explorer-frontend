import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import { saveArticle, isArticleSaved } from "../../Utils/Constants";
import "./NewsCardList.css";

const NewsCardList = ({ isLoggedIn }) => {
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [articles] = useState([]);

  const onSave = (article) => {
    if (!isArticleSaved(article)) {
      saveArticle(article);
    }
  };

  const loadAdditionalArticles = () => {
    setVisibleArticles((visible) => visible + 3);
  };

  return (
    <div className="news-card__list">
      <h2 className="news-card__list-title">Search results</h2>
      <div className="news-card__list-grid">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        {/* {articles.slice(0, visibleArticles).map((article) => (
          <NewsCard
            key={article.url}
            article={article}
            onSave={onSave}
            isLoggedIn={isLoggedIn}
          />
        ))} */}
      </div>
      {visibleArticles < articles.length && (
        <button
          onClick={loadAdditionalArticles}
          className="news-card-list__load-articles"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default NewsCardList;
