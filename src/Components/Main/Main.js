import "./Main.css";
import Header from "../Header/Header";
import SearchBar from "../SearchForm/SearchForm";

// import { useMemo, useContext } from "react";

function Main({ onSelectCard, isLoggedIn }) {
  // const weatherType = useMemo(() => {
  //   if (weatherUnitSwitch >= 86) {
  //     return "hot";
  //   } else if (weatherUnitSwitch >= 66 && weatherUnitSwitch <= 85) {
  //     return "warm";
  //   } else if (weatherUnitSwitch <= 65) {
  //     return "cold";
  //   }
  // }, [weatherUnitSwitch]);

  return (
    <main className="main ">
      <div className="main__overlay">
        <Header />
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
