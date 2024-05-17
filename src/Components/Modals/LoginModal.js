import ModalWithForm from "./ModalWithForm";
import React, { useState } from "react";
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
        <div className="form__label-password">
          <label className="form__label">Username</label>
          <input
            type="text"
            name="username"
            minLength="1"
            className="form__input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <span className="form__error">{errors.username}</span>
        </div>
      </div>

      <div className="form__buttons">
        <button type="submit" className="form__submit-button">
          {buttontext}
        </button>
        <button className="form__login-button" onClick={openRegisterModal}>
          or <span className="form__login-button_text">Sign up</span>
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
