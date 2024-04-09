import "./SavedNewsHeader.css";
import React from "react";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import logout from "../../Images/logout.svg";

const SavedNewsHeader = ({ handleRegisterModal }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <newsheader className="newsHeader ">
      <Link to="/">
        <button type="text" className="newsHeader__link-main">
          NewsExplorer
        </button>
      </Link>

      <div className="newsHeader__link-group">
        <Link to="/">
          <button type="text" className="newsHeader__link-home" id="link-home">
            Home
          </button>
        </Link>
        <div className="saved-articles__grouping">
          <Link to="/saved-articles">
            <button
              type="text"
              className="newsHeader__link-saved-articles"
              id="link-home"
            >
              Saved articles
            </button>
          </Link>
          <img className="newsHeader__saved-articles_underline" />
        </div>

        <div>
          <button
            type="text"
            className="newsHeader__button-logout"
            id="link-signin"
            onClick={handleRegisterModal}
          >
            {/* {currentUser.name} */}ss
            <img src={logout} />
          </button>
        </div>
      </div>
    </newsheader>
  );
};

export default SavedNewsHeader;
