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
import NothingFound from "./Components/NothingFound/NothingFound";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
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
    console.log("cheese");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleOpenPoupMenu = () => {
    setActiveModal("mobile");
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
      <CurrentUserContext.Provider value={{ isLoading, currentUser }}>
        <SavedArticleContext.Provider value={savedArticles}>
          {/* <Header
            handleRegisterModal={handleRegisterModal}
            isLoggedIn={isLoggedIn}
          /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  handleRegisterModal={handleRegisterModal}
                  onClose={handleCloseModal}
                  isLoading={isLoading}
                />
              }
            ></Route>
            <Route
              path="/saved-news"
              element={<SavedNews newsCard={newsCard} />}
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
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              // loginUser={loginUser}
              openRegisterModal={handleRegisterModal}
              isLoading={isLoading}
            />
          )}
        </SavedArticleContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
