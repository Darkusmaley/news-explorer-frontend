import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import RegisterModal from "./Components/Modals/RegisterModal";
import LoginModal from "./Components/Modals/LoginModal";
import SavedNews from "./Components/SavedNews/SavedNews";
import MobileModal from "./Components/MobileModal/MobileModal";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

import { CurrentUserContext } from "./Components/Context/CurrentUserContext";
import { SavedArticleContext } from "./Components/Context/SavedArticleContext";
import { CurrentPageContext } from "./Components/Context/CurrentPageContext";
import { HasSearchedContext } from "./Components/Context/HasSearchedContext";
import { SearchResultContext } from "./Components/Context/SearchResultContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [hasSearched, setHasSearched] = useState("");
  const [searchResults, setSearchResultst] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

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

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/");
  };

  const handleSaveArticle = (article) => {};

  const handleDeleteArticle = (article) => {
    console.log(article);
  };

  return (
    <div className="App ">
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <SavedArticleContext.Provider value={{ savedArticles }}>
            <HasSearchedContext.Provider value={{ hasSearched }}>
              <SearchResultContext.Provider value={{ searchResults }}>
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <Main
                        isLoggedIn={isLoggedIn}
                        handleRegisterModal={handleRegisterModal}
                        handleLoginModal={handleLoginModal}
                        handleMobileModal={handleMobileModal}
                        isLoading={isLoading}
                        searchError={searchError}
                        logoutUser={logoutUser}
                      />
                    }
                  ></Route>
                  <Route
                    path="/saved-news"
                    element={
                      // <ProtectedRoute>
                      <SavedNews
                        handleMobileModal={handleMobileModal}
                        handleDeleteArticle={handleDeleteArticle}
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
                    isLoggedIn={isLoggedIn}
                    // loginUser={loginUser}
                    logoutUser={logoutUser}
                    openMobileModal={handleMobileModal}
                    handleRegisterModal={handleRegisterModal}
                  />
                )}
              </SearchResultContext.Provider>
            </HasSearchedContext.Provider>
          </SavedArticleContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
