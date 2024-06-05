import { useContext } from "react";
import "./MobileModal.css";
import { Link } from "react-router-dom";
import { CurrentPageContext } from "../Context/CurrentPageContext";

const MobileModal = ({
  isLoggedIn,
  handleLoginModal,
  handleCloseModal,
  handleLogout,
}) => {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const { currentPage } = useContext(CurrentPageContext);

  return (
    <div className="mobile-modal" onClick={handleOverlay}>
      <div className="mobile-modal__container">
        <div className="mobile-modal__header">
          <h1 className="mobile-modal__news-explorer">NewsExplorer</h1>

          <button
            className="mobile-modal__close-button"
            onClick={handleCloseModal}
          />
        </div>
        <div className="mobile-modal__redirects">
          {currentPage === "/saved-news" && (
            <Link to={"/"}>
              <button className="mobile-modal__home-button">Home</button>
            </Link>
          )}

          {currentPage === "/" && (
            <Link to={"/saved-news"}>
              <button className="mobile-modal__saved-news-button">
                Saved news
              </button>
            </Link>
          )}

          {!isLoggedIn ? (
            <button
              className="mobile-modal__signin-button"
              onClick={handleLoginModal}
            >
              Sign in
            </button>
          ) : (
            <button
              className="mobile-modal__logout-button"
              onClick={handleLogout}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
