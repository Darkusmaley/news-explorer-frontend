import "./Main.css";
import Header from "../Header/Header";
import SearchBar from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";

// import { useMemo, useContext } from "react";

function Main({ onSelectCard, isLoggedIn, handleRegisterModal }) {
  return (
    <main className="main ">
      <div className="main__overlay">
        <h1 className="main__title">What's going on in the world? </h1>
        <h3 className="main__subtext">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <SearchBar />
      </div>
      <About />
    </main>
  );
}

export default Main;
