import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
// import { useContext } from "react";

const Header = ({ isLoggedIn, handleRegisterModal }) => {
  // const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header ">
      <Link to="/">
        <button type="text" className="header__link-main">
          NewsExplorer
        </button>
      </Link>
      <div className="header__link-group">
        {/* {isLoggedIn ? ( */}
        <>
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
        </>
        {/* ) : (
          <></>
        )} */}
      </div>
      {/* <div className="header__logo">
        
      <div className="header__avatar">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div>
              <button
                className="header__clothes-add-button"
                type=" text"
                onClick={onCreateModal}
                id="add-clothes-button"
              >
                + Add new
              </button>
            </div>
            <div>
              <Link to="/profile" className="profile__link">
                {currentUser?.name}
              </Link>
            </div>
            <div>
              <img
                className="header__logo-avatar-image"
                src={currentUser?.avatar}
                placeholder={currentUser?.name}
                alt="Avatar logo"
              />
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onRegister}
              className="header__button"
            >
              Sign up
            </button>
            <button type="button" onClick={onLogin} className="header__button">
              Login{" "}
            </button>
          </>
        )}
      </div> */}
    </header>
  );
};

export default Header;
