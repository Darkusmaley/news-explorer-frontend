import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main></Main>
      {/* <Header></Header> */}

      {/* <Route>"/"- main</Route> */}
      {/* <Route>"/saved-news"- displays Saved articles page</Route> */}
    </div>
  );
}

export default App;
