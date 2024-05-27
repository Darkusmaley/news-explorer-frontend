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
  const { values, errors, isValid, handleChange } = useFormValidation({
    email: "",
    password: "",
  });

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
      isDisabled={!isValid}
    >
      <div className="modal-form__info">
        <div className="modal-form__label-email">
          <label className="modal-form__label">Email</label>
          <input
            type="text"
            name="email"
            minLength="1"
            maxLength="30"
            className="modal-form__input"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <span className="modal-form__error">{errors.email}</span>
        </div>
        <div className="modal-form__label-password">
          <label className="modal-form__label">Password</label>
          <input
            type="text"
            name="password"
            minLength="1"
            className="modal-form__input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="modal-form__error">{errors.password}</span>
        </div>
        <div className="modal-form__label-username">
          <label className="modal-form__label">Username</label>
          <input
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            className="modal-form__input"
            placeholder="Enter your username"
            value={values.name}
            onChange={handleChange}
          />
          <span className="modal-form__error">{errors.username}</span>
        </div>
      </div>
      <div className="modal-form__buttons">
        <button
          type="submit"
          className="modal-form__submit-button"
          onSubmit={onRegister}
        >
          {buttontext}
        </button>

        <button className="modal-form__login-button" onClick={openLoginModal}>
          or <span className="modal-form__login-button_text">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
