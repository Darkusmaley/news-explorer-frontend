import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import React, { useContext, useEffect, useState } from "react";
import MobileView from "../MobileView/MobileView";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { SavedArticleContext } from "../Context/SavedArticleContext";

function SavedNews({ isLoggedIn, handleRegisterModal, handleMobileModal }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticleContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  const keywordArr = userArticles.map((article) => article.keyword);
  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getKeywordString = (keywords) => {
    if (keywordArr.length === 0) {
      return "";
    }
    if (keywordArr.length === 1) {
      return `${capatalizeFirstLetter(keywordArr[0])}`;
    }
    if (keywordArr.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const sortKeywordArr = [];
      for (const item in count) {
        sortKeywordArr.push([item, count[item]]);
      }
      sortKeywordArr.sort((a, b) => {
        return b[1] - a[1];
      });

      if (sortKeywordArr.length === 1) {
        return `${capatalizeFirstLetter(sortKeywordArr[0][0])}`;
      } else if (sortKeywordArr.length === 2) {
        return `${capatalizeFirstLetter(
          sortKeywordArr[0][0]
        )} and ${capatalizeFirstLetter(sortKeywordArr[1][0])}`;
      } else {
        const firstKeyword = sortKeywordArr
          .slice(0, 2)
          .map((keyword) => capatalizeFirstLetter(keyword[0]))
          .join(", ");
        const moreCount = sortKeywordArr.length - 2;
        return `${firstKeyword}, and ${moreCount} more`;
      }
    } else {
      return null;
    }
  };

  const keywordString = getKeywordString(keywordArr);

  console.log(currentUser);

  return (
    <section className="saved-news ">
      <div>
        {isMobile ? (
          <MobileView
            currentRoute="saved-news"
            handleMobileModal={handleMobileModal}
          />
        ) : (
          <SavedNewsHeader
            handleRegisterModal={handleRegisterModal}
            isLoggedIn={isLoggedIn}
          />
        )}

        <div className="saved-news__text_group">
          <h1 className="saved-news__title">Saved articles </h1>
          <h2 className="saved-news__subtext">
            {currentUser.name}, you have {userArticles.length} saved article
            {userArticles.length !== 1 ? "s" : ""}
          </h2>
          <div className="saved-news__search-grouping">
            <p className="saved-news__search-text">
              By keywords:{" "}
              <span className="saved-news__search-text_keywords-primary">
                {keywordString}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="saved-news__cards">
        <div className="saved-news__card_container">
          <SavedNewsCardList />
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
