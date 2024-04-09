import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext } from "react";
import logout from "../../Images/logout.svg";

const Header = ({ isLoggedIn, handleRegisterModal }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header ">
      <Link to="/">
        <button type="text" className="header__link-main">
          NewsExplorer
        </button>
      </Link>

      {isLoggedIn ? (
        <div className="header__link-group">
          <div className="home__grouping">
            <Link to="/">
              <button type="text" className="header__link-home" id="link-home">
                Home
              </button>
            </Link>
            <img className="header__home-underline"></img>
          </div>
          <Link to="/saved-articles">
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
              className="header__link-signin"
              id="link-signin"
              onClick={handleRegisterModal}
            >
              {/* {currentUser.name} */}ss
              <img src={logout} />
            </button>
          </div>
        </div>
      ) : (
        <div className="header__link-group">
          <div className="home__grouping">
            <Link to="/">
              <button type="text" className="header__link-home" id="link-home">
                Home
              </button>
            </Link>
            <img className="header__home-underline"></img>
          </div>

          <div>
            <button
              type="text"
              className="header__link-signin"
              id="link-signin"
              onClick={handleRegisterModal}
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
