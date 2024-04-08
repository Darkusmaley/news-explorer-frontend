import ModalWithForm from "./ModalWithForm";
import React, { useState } from "react";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  isLoading,
  loginUser,
  openRegisterModal,
  buttontext = isLoading ? "Signing in..." : "Sign in",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onLogin}
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
        <div className="form__label-password">
          <label className="form__label">Username</label>
          <input
            type="text"
            name="username"
            minLength="1"
            className="form__input"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
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
