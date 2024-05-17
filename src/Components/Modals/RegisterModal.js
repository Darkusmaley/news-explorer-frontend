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
      title="Sign in"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onRegister}
      isDisabled={!isValid}
    >
      <div className="form__info">
        <div className="form__label-email">
          <label className="form__label">Email</label>
          <input
            type="text"
            name="email"
            minLength="1"
            maxLength="30"
            className="form__input"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <span className="form__error">{errors.email}</span>
        </div>
        <div className="form__label-password">
          <label className="form__label">Password</label>
          <input
            type="text"
            name="password"
            minLength="1"
            className="form__input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="form__error">{errors.password}</span>
        </div>
      </div>
      <div className="form__buttons">
        <button
          type="submit"
          className="form__submit-button"
          onSubmit={onRegister}
        >
          {buttontext}
        </button>

        <button className="form__login-button" onClick={openLoginModal}>
          or <span className="form__login-button_text">Sign in</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
