import ModalWithForm from "../Modals/ModalWithForm";
import { useFormValidation } from "../Hooks/useForm";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  registerUser,
  openLoginModal,
  buttontext = isLoading ? "Signing up..." : "Sign up",
}) => {
  const onRegister = (e) => {
    e.preventDefault();
    registerUser(values);
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onRegister}
    >
      <div className="modal-with-form__info">
        <div className="modal-with-form__label-email">
          <label className="modal-with-form__label">Email</label>
          <input
            type="text"
            name="email"
            minLength="1"
            maxLength="30"
            className="modal-with-form__input"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
          <span className="modal-with-form__error">{errors.email}</span>
        </div>
        <div className="modal-with-form__label-password">
          <label className="modal-with-form__label">Password</label>
          <input
            type="text"
            name="password"
            minLength="1"
            className="modal-with-form__input"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
          <span className="modal-with-form__error">{errors.password}</span>
        </div>
        <div className="modal-with-form__label-username">
          <label className="modal-with-form__label">Username</label>
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            className="modal-with-form__input"
            placeholder="Enter your username"
            value={values.name}
            onChange={handleChange}
          />
          <span className="modal-with-form__error">{errors.username}</span>
        </div>
      </div>
      <div className="modal-with-form__buttons">
        <button
          type="submit"
          className="modal-with-form__submit-button "
          onSubmit={onRegister}
        >
          {buttontext}
        </button>

        <button
          className="modal-with-form__login-button"
          onClick={openLoginModal}
        >
          or <span className="modal-with-form__login-button_text">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
