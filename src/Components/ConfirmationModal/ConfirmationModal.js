import "./ConfirmationModal.css";

const ConfirmationModal = ({ handleCloseModal, handleLoginModal }) => {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="confirmation-modal" onClick={handleOverlay}>
      <div className="confirmation-modal__container">
        <div className="confirmation-modal__content">
          <button
            className="confirmation-modal__close-button"
            onClick={handleCloseModal}
          />
          <form className="confirmation-modal__form">
            <h3 className="confirmation-modal__text">
              Registration successfully completed!
            </h3>

            <button
              className="confirmation-modal__submit-button"
              onsubmit={handleLoginModal}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
