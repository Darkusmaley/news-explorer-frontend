import React from "react";
import useNavigation from "../Navigation/Navigation";
import menu from "../../Images/menu.svg";
import menuDark from "../../Images/menu-dark.svg";
import "./MobileView.css";

const MobileView = ({ currentRoute, handleMobileModal }) => {
  const { navigateToHome } = useNavigation();
  const isSavedNews = currentRoute === "saved-news";
  const menuIcon = isSavedNews ? menuDark : menu;
  return (
    <header
      className={`mobile-header ${
        isSavedNews ? "mobile-header__saved-news" : ""
      }`}
    >
      <div
        className={`mobile-header__container ${
          isSavedNews ? "mobile-header__container-saved-news" : ""
        }`}
      >
        <button
          className={` mobile-header__button-news-explorer ${
            isSavedNews ? "mobile-header__button_news-explorer-saved-news" : ""
          }`}
          onClick={navigateToHome}
        >
          NewsExplorer
        </button>
        <button
          className="mobile-header__menu-button"
          onClick={handleMobileModal}
        >
          <img
            className="mobile-header__menu-icon"
            alt="Menu Icon"
            src={menuIcon}
          />
        </button>
      </div>
      <div></div>
    </header>
  );
};

export default MobileView;
