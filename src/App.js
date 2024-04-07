import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { Routes } from "react-router";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
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
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        {/* <Route path="/bookmarked">"/saved-news"- displays Saved articles page</Route> */}
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
