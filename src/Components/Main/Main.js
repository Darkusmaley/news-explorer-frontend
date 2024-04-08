import "./Main.css";
import Header from "../Header/Header";
import SearchBar from "../SearchForm/SearchForm";

// import { useMemo, useContext } from "react";

function Main({ onSelectCard, isLoggedIn, handleRegisterModal }) {
  return (
    <main className="main ">
      <div className="main__overlay">
        <Header
          handleRegisterModal={handleRegisterModal}
          isLoggedIn={isLoggedIn}
        />
        <h1 className="main__title">What's going on in the world? </h1>
        <h3 className="main__subtext">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <SearchBar />
      </div>
    </main>
  );
}

export default Main;
