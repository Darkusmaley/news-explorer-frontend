import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes } from "react-router";
import RegisterModal from "./Components/Modals/RegisterModal";
import LoginModal from "./Components/Modals/LoginModal";
import SavedNews from "./Components/SavedNews/SavedNews";
import { CurrentUserContext } from "./Components/Context/CurrentUserContext";
import { SavedArticleContext } from "./Components/Context/SavedArticleContext";
import MobileModal from "./Components/MobileModal/MobileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [newsCard, setNewsCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLogin] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleMobileModal = () => {
    setActiveModal("mobile");
    console.log("cheese");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App ">
      <CurrentUserContext.Provider value={currentUser}>
        <SavedArticleContext.Provider value={savedArticles}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  handleRegisterModal={handleRegisterModal}
                  handleMobileModal={handleMobileModal}
                  onClose={handleCloseModal}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  newsCard={newsCard}
                  handleMobileModal={handleMobileModal}
                />
              }
            ></Route>
          </Routes>
          <Footer />

          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              // registerUser={registerUser}
              openLoginModal={handleLoginModal}
              isLoading={isLoading}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              // loginUser={loginUser}
              openRegisterModal={handleRegisterModal}
              isLoading={isLoading}
            />
          )}
          {activeModal === "mobile" && (
            <MobileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "mobile"}
              // loginUser={loginUser}
              openMobileModal={handleMobileModal}
              handleRegisterModal={handleRegisterModal}
            />
          )}
        </SavedArticleContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
