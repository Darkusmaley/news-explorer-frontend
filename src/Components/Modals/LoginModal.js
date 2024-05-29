import ModalWithForm from "./ModalWithForm";

import { useFormValidation } from "../Hooks/useForm";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  loginUser,
  openRegisterModal,
  buttontext = isLoading ? "Signing in..." : "Sign in",
}) => {
  const { values, errors, isValid, handleChange } = useFormValidation({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
    loginUser(values);
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onLogin}
      isDisabled={!isValid}
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
            value={values.email}
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
            value={values.password}
            onChange={handleChange}
          />
          <span className="modal-with-form__error">{errors.password}</span>
        </div>
      </div>

      <div className="modal-with-form__buttons">
        <button type="submit" className="modal-with-form__submit-button">
          {buttontext}
        </button>
        <button
          className="modal-with-form__login-button"
          onClick={openRegisterModal}
        >
          or <span className="modal-with-form__login-button_text">Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
