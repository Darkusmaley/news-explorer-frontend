import "./SavedNewsHeader.css";
import React from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";

const SavedNewsHeader = ({ isLoggedIn, handleRegisterModal }) => {
  // const currentUser = useContext(CurrentUserContext);

  return (
    <newsheader className="newsHeader ">
      <Link to="/">
        <button type="text" className="newsHeader__link-main">
          NewsExplorer
        </button>
      </Link>

      <div className="newsHeader__link-group">
        <div className="home__grouping">
          <Link to="/">
            <button
              type="text"
              className="newsHeader__link-home"
              id="link-home"
            >
              Home
            </button>
          </Link>
          <img className="header__home-underline"></img>
        </div>
        <Link to="/saved-articles">
          <button
            type="text"
            className="newsHeader__link-saved-articles"
            id="link-home"
          >
            Saved articles
          </button>
        </Link>
        <div>
          <button
            type="text"
            className="newsHeader__link-signin"
            id="link-signin"
            onClick={handleRegisterModal}
          >
            Sign in
          </button>
        </div>
      </div>
    </newsheader>
  );
};

export default SavedNewsHeader;
