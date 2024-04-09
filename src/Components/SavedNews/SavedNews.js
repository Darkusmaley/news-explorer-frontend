import "./SavedNews.css";
import Header from "../Header/Header";
import SearchBar from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

// import { useMemo, useContext } from "react";

function SavedNews({ onSelectCard, isLoggedIn, handleRegisterModal }) {
  return (
    <section className="savedNews ">
      <div className="">
        <SavedNewsHeader
          handleRegisterModal={handleRegisterModal}
          isLoggedIn={isLoggedIn}
        />
        <h1 className="savedNews__title">Saved articles </h1>
        <h3 className="savedNews__subtext">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
      </div>
    </section>
  );
}

export default SavedNews;
