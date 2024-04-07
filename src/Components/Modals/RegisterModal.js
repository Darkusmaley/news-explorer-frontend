import React, { useState } from "react";
import ModalWithForm from "../Modals/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  registerUser,
  openLoginModal,
  buttontext = isLoading ? "Signing up..." : "Sign up",
}) => {
  const [name, setName] = useState("");
  const [avatar, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign in"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onRegister}
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
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form__label-password">
          <label className="form__label">Password</label>
          <input
            type="text"
            name="password"
            minLength="1"
            className="form__input"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
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
