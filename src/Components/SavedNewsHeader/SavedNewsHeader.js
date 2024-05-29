import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import React, { Link } from "react-router-dom";
import { useContext } from "react";
import logout from "../../Images/logout.svg";
import underline from "../../Images/Black-Vector (Stroke).svg";
const SavedNewsHeader = ({ handleLogout }) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="news-header ">
      <Link to="/">
        <button type="text" className="news-header__link-main">
          NewsExplorer
        </button>
      </Link>

      <div className="news-header__link-group">
        <Link to="/">
          <button type="text" className="news-header__link-home" id="link-home">
            Home
          </button>
        </Link>
        <div className="news-header__grouping">
          <Link to="/saved-news">
            <button
              type="text"
              className="news-header__link-saved-articles"
              id="link-home"
            >
              Saved articles
            </button>
          </Link>
          <img
            src={underline}
            className="news-header__saved-articles_underline"
            alt="underline"
          />
        </div>

        <div>
          <button
            type="text"
            className="news-header__button-logout"
            id="link-signin"
            onClick={handleLogout}
          >
            <p className="news-header__button-logout_text">
              {currentUser.name}
            </p>
            <img src={logout} alt="logout button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
