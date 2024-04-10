import "./SavedNewsHeader.css";
import React from "react";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logout from "../../Images/logout.svg";

const SavedNewsHeader = ({ handleRegisterModal }) => {
  const currentUser = useContext(CurrentUserContext);

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
        <div className="saved-articles__grouping">
          <Link to="/saved-articles">
            <button
              type="text"
              className="news-header__link-saved-articles"
              id="link-home"
            >
              Saved articles
            </button>
          </Link>
          <img className="news-header__saved-articles_underline" />
        </div>

        <div>
          <button
            type="text"
            className="news-header__button-logout"
            id="link-signin"
            onClick={handleRegisterModal}
          >
            {/* {currentUser.name} */}ss
            <img src={logout} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
