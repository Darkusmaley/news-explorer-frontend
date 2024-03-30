import Header from "../Header/Header";
import "./Main.css";
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

  return (<main className="main app__section">
    <Header></Header>
  </main>);
}

export default Main;
