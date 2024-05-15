import "./NewsCard.css";
// import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext } from "react";
import marcus from "../../Images/MarcusAley.png";
import React, { useState, useEffect } from "react";
import { isArticleSaved } from "../../Utils/Constants";
import trashCan from "../../Images/trash.svg";
import trashCanHover from "../../Images/trash-hover.svg";
import bookmark from "../../Images/Bookmark.svg";
import bookmarkClicked from "../../Images/Bookmark-marked.svg";
import bookmarkHover from "../../Images/Bookmark-hover.svg";
import { SavedArticleContext } from "../Context/SavedArticleContext";
// import { KeywordContext } from "../../Components/Context/KeywordContext";
const NewsCard = ({ newsData, isLoggedIn, isInSavedNewsRoute }) => {
  const { savedArticles } = useContext(SavedArticleContext);

  console.log(marcus);

  const [isSaved, setIsSaved] = useState(isArticleSaved(newsData));
  const [hovered, setHovered] = useState(false);

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
            src={newsData.link}
            alt={savedArticles.title}
            className="card__image"
          />
          <div className="card__card-container">
            {isInSavedNewsRoute && savedArticles.searchKeyword && (
              <div className="card__tag-container">
                <h2 className="card__tag">{savedArticles.keyword}</h2>
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
            onClick={console.log("cheese")}
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
          {new Date(savedArticles.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h3>
        <h3 className="card__title">{savedArticles.title}</h3>
        <p className="card__description">{savedArticles.description}</p>
        <p className="card__publisher">{savedArticles.source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
