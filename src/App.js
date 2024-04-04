import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { Routes } from "react-router";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route>"/saved-news"- displays Saved articles page</Route> */}
      </Routes>
      <About></About>
      <Footer />
    </div>
  );
}

export default App;
