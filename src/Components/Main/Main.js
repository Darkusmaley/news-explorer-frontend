import "./Main.css";
import Header from "../Header/Header";
import MobileView from "../MobileView/MobileView";
import SearchBar from "../SearchForm/SearchForm";
import About from "../About/About";
import { useContext, useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import { HasSearchedContext } from "../Context/HasSearchedContext";
import { SearchResultContext } from "../Context/SearchResultContext";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewsCardList/NewsCardList";

const Main = ({
  isLoggedIn,
  isLoading,
  handleRegisterModal,
  handleLoginModal,
  handleMobileModal,
  searchError,
  logoutUser,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);

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
            <div>
              {isLoading && <Preloader />}
              {!isLoading && hasSearched && searchResults.length > 0 ? (
                <NewsCardList handleRegisterModal={handleRegisterModal} />
              ) : !isLoading && hasSearched && searchResults.length === 0 ? (
                <NothingFound />
              ) : searchError === true ? (
                <p className="main__search-error">
                  Something went wrong during your request. The server may be
                  down or there are connection issues, please try again later
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <>
            <Header
              handleRegisterModal={handleRegisterModal}
              handleLoginModal={handleLoginModal}
              isLoggedIn={isLoggedIn}
              logoutUser={logoutUser}
            />
            <h1 className="main__title">What's going on in the world? </h1>
            <p className="main__subtext">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <SearchBar isLoading={isLoading} />
            <div>
              {isLoading && <Preloader />}
              {!isLoading && hasSearched && searchResults.length > 0 ? (
                // <NewsCard />
                <NewsCardList handleRegisterModal={handleRegisterModal} />
              ) : !isLoading && hasSearched && searchResults.length === 0 ? (
                <NothingFound />
              ) : searchError === true ? (
                <p className="main__search-error">
                  Something went wrong during your request. The server may be
                  down or there are connection issues, please try again later
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </div>
      <About />
    </main>
  );
};

export default Main;
