import "./NewsCard.css";
// import { CurrentUserContext } from "../Context/CurrentUserContext";
// import { useContext } from "react";
import marcus from "../../Images/MarcusAley.png";
import { useState, useEffect } from "react";
import {
  isArticleSaved,
  deleteArticle,
  saveArticle,
} from "../../Utils/Constants";
import trashCan from "../../Images/trash.svg";
import trashCanHover from "../../Images/trash-hover.svg";
import bookmark from "../../Images/Bookmark.svg";
import bookmarkClicked from "../../Images/Bookmark-marked.svg";
import bookmarkHover from "../../Images/Bookmark-hover.svg";

const NewsCard = ({
  isLoggedIn,
  isInSavedNewsRoute,
  onArticleSave,
  onArticleDelete,
}) => {
  // const currentUser = useContext(CurrentUserContext);
  //   const id = item._id; for user identification later

  console.log(marcus);

  const [article] = useState([]);
  const [isSaved, setIsSaved] = useState(isArticleSaved(article));
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsSaved(isArticleSaved(article));
  }, [article]);

  const handleSaveClick = () => {
    if (!isLoggedIn && !isInSavedNewsRoute) return;
    if (isInSavedNewsRoute) {
      deleteArticle(article);
      onArticleDelete && onArticleDelete(article);
    } else {
      if (!isSaved) {
        saveArticle(article);
        setIsSaved(true);
        onArticleSave && onArticleSave(article);
      }
    }
  };

  const icon = isInSavedNewsRoute
    ? hovered
      ? trashCanHover
      : trashCan
    : isSaved
    ? bookmarkClicked
    : hovered
    ? bookmarkHover
    : bookmark;

  const buttonClass = isInSavedNewsRoute
    ? "card__delete-button"
    : "card__save-button";

  return (
    <div className="card">
      <div className="card__image">
        <div className="card__container">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="card__image"
          />
          <div className="card__card-container">
            {isInSavedNewsRoute && article.searchKeyword && (
              <div className="card__tag-container">
                <h2 className="card__tag">{"article.searchKeyword"}</h2>
              </div>
            )}
            {hovered && !isLoggedIn && !isInSavedNewsRoute && (
              <div className="card__login_prompt">
                <p className="card__login_prompt-text">
                  Login to save articles
                </p>
              </div>
            )}
            {hovered && isInSavedNewsRoute && (
              <div className="card__remove_card">
                <p className="card__remove_card-text">
                  Remove from saved cards
                </p>
              </div>
            )}
          </div>
          <button
            type="button"
            className={buttonClass}
            onClick={handleSaveClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className="card__icon"
              src={icon}
              alt={isInSavedNewsRoute ? "Remove article" : "Save article"}
            />
          </button>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__publish_date">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
        <p className="card__article_source">{article.source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
