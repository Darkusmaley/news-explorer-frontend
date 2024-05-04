import "./Main.css";
import Header from "../Header/Header";
import MobileView from "../MobileView/MobileView";
import SearchBar from "../SearchForm/SearchForm";
import About from "../About/About";
import { useEffect, useState } from "react";

function Main({
  isLoggedIn,
  isLoading,
  handleRegisterModal,
  handleMobileModal,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main ">
      <div className="main__overlay">
        {isMobile ? (
          <>
            <MobileView
              currentRoute={"main"}
              handleMobileModal={handleMobileModal}
            />
            <h1 className="main__title">What's going on in the world? </h1>
            <p className="main__subtext">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <SearchBar isLoading={isLoading} />
          </>
        ) : (
          <>
            <Header
              handleRegisterModal={handleRegisterModal}
              isLoggedIn={isLoggedIn}
            />
            <h1 className="main__title">What's going on in the world? </h1>
            <p className="main__subtext">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <SearchBar isLoading={isLoading} />
          </>
        )}
      </div>
      <About />
    </main>
  );
}

export default Main;
