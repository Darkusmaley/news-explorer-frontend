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
import ConfirmationModal from "./Components/ConfirmationModal/ConfirmationModal";

import { CurrentUserContext } from "./Components/Context/CurrentUserContext";
import { SavedArticleContext } from "./Components/Context/SavedArticleContext";
import { CurrentPageContext } from "./Components/Context/CurrentPageContext";
import { HasSearchedContext } from "./Components/Context/HasSearchedContext";
import { SearchResultContext } from "./Components/Context/SearchResultContext";
import { authorization, checkToken, registration } from "./Utils/Auth";
import {
  addSavedArticles,
  getSavedArticles,
  removeSavedArticles,
} from "./Utils/Api";
import { getSearchResults } from "./Utils/NewsApi";

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
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleOverlay);

    return () => document.removeEventListener("keydown", handleOverlay);
  }, []);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res.user);
            setLoggedIn(true);
          }
        })
        .then(() => {
          if (currentPage === "/saved-news") {
            getSavedArticles(jwt).then((articles) => {
              setSavedArticles(articles);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleMobileModal = () => {
    setActiveModal("mobile");
  };

  const handleConfirmationModal = () => {
    setActiveModal("confirm");
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

  const handleRegisterUser = (data) => {
    const makeRequest = () => {
      return registration(data).then((user) => {
        if (user) {
          handleConfirmationModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  const handleLogin = (user) => {
    const makeRequest = () => {
      setIsLoading(true);
      return authorization(user).then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          checkToken(res.token).then((data) => {
            setCurrentUser(data.user);
            setLoggedIn(true);
          });
        }
      });
    };
    handleSubmit(makeRequest);
  };

  const logoutUser = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/");
  };

  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setIsSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setIsSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.log(err);
        setSearchError(true);
      });
  };

  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (
      !savedArticles.some((article) => {
        console.log(article);
        return article.link === newsData.url;
      })
    ) {
      addSavedArticles(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) => {
            return article.url === newsData.url ? newArticle : article;
          });
          getSearchResults(newSearchResults);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (
      savedArticles.some((article) => {
        return article.link === newsData.url;
      })
    ) {
      removeSavedArticles(newsData, token)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter((article) => {
            return article._id !== newsData._id;
          });
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) => {
            return article.url === newsData.url ? newArticle : article;
          });
          setSearchResults(newSearchResults);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteArticle = ({ newsData, token }) => {
    removeSavedArticles(newsData, token)
      .then(() => {
        const unsaveNewsArticles = savedArticles.filter((article) => {
          return article._id !== newsData._id;
        });
        setSavedArticles(unsaveNewsArticles);
      })
      .catch((err) => {
        console.log(err);
      });
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
                        handleSearch={handleSearch}
                        handleDeleteArticle={handleDeleteArticle}
                        handleSaveArticle={handleSaveArticle}
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
                    registerUser={handleRegisterUser}
                    openLoginModal={handleLoginModal}
                    isLoading={isLoading}
                  />
                )}
                {activeModal === "login" && (
                  <LoginModal
                    handleCloseModal={handleCloseModal}
                    isOpen={activeModal === "login"}
                    loginUser={handleLogin}
                    openRegisterModal={handleRegisterModal}
                    isLoading={isLoading}
                  />
                )}
                {activeModal === "mobile" && (
                  <MobileModal
                    handleCloseModal={handleCloseModal}
                    isOpen={activeModal === "mobile"}
                    isLoggedIn={isLoggedIn}
                    logoutUser={logoutUser}
                    openMobileModal={handleMobileModal}
                    handleRegisterModal={handleRegisterModal}
                  />
                )}

                {activeModal === "confirm" && (
                  <ConfirmationModal
                    handleCloseModal={handleCloseModal}
                    isOpen={activeModal === "confirm"}
                    handleLoginModal={handleLoginModal}
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
