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
      className={`mobile__header ${
        isSavedNews ? "mobile__header_saved-news" : ""
      }`}
    >
      <div
        className={`mobile__header_container ${
          isSavedNews ? "mobile__header_container--saved-news" : ""
        }`}
      >
        <button
          className={` mobile__header_button-news-explorer ${
            isSavedNews ? "mobile-header__button--news-explorer-saved-news" : ""
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
