import "./Header.css";
import logout from "../../Images/logout-white.svg";
import underline from "../../Images/underline.svg";

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CurrentUserContext } from "../Context/CurrentUserContext";

const Header = ({ handleLoginModal, logoutUser }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header ">
      <div className="header__overlay">
        <Link to="/">
          <button type="text" className="header__link-main">
            NewsExplorer
          </button>
        </Link>

        {isLoggedIn ? (
          <div className="header__link-group">
            <div className="home__grouping">
              <Link to="/">
                <button
                  type="text"
                  className="header__link-home"
                  id="link-home"
                >
                  Home
                </button>
              </Link>
              <img
                className="header__home-underline"
                alt="underline"
                src={underline}
              ></img>
            </div>
            <Link to="/saved-news">
              <button
                type="text"
                className="header__link-saved-articles"
                id="link-home"
              >
                Saved articles
              </button>
            </Link>
            <div>
              <button
                type="text"
                className="header__button-logout"
                id="link-logout"
                onClick={logoutUser}
              >
                <p> {currentUser.name}</p>
                <img src={logout} alt="logout button" />
              </button>
            </div>
          </div>
        ) : (
          <div className="header__link-group">
            <div className="home__grouping">
              <Link to="/">
                <button
                  type="text"
                  className="header__link-home"
                  id="link-home"
                >
                  Home
                </button>
              </Link>
              <img
                src={underline}
                className="header__home-underline"
                alt="underline"
              />
            </div>

            <div>
              <button
                type="text"
                className="header__link-signin"
                id="link-signin"
                onClick={handleLoginModal}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
