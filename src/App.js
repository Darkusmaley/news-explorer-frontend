import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import About from "./Components/About/About";
import { Routes } from "react-router";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route>"/saved-news"- displays Saved articles page</Route> */}
      </Routes>
      <About></About>
    </div>
  );
}

export default App;
