import "./MobileModal.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const MobileModal = ({
  onClose,
  isLoggedIn,
  handleRegisterModal,
  handleCloseModal,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

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
          <Link to={"/"}>
            <button className="mobile-modal__home-button">Home</button>
          </Link>

          {!isLoggedIn ? (
            <button
              className="mobile-modal__signIn-button"
              onClick={handleRegisterModal}
            >
              Sign in
            </button>
          ) : (
            <button
              className="mobile-modal__logout-button"
              onClick={handleRegisterModal}
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
