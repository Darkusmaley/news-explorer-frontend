import "./SavedNews.css";
import Header from "../Header/Header";
import SearchBar from "../SearchForm/SearchForm";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({ onSelectCard, isLoggedIn, handleRegisterModal }) {
  return (
    <section className="savedNews ">
      <div className="">
        <SavedNewsHeader
          handleRegisterModal={handleRegisterModal}
          isLoggedIn={isLoggedIn}
        />

        <div className="savedNews__group">
          <h3 className="savedNews__title">Saved articles </h3>
          <h3 className="savedNews__subtext">
            Elise, you have 5 saved articles
          </h3>
          <div className="savedNews__search-grouping">
            <h3 className="savedNews__search-text">
              By keywords:
              <span className="savedNews__search-text_bold">
                {" "}
                Nature, Yellowstone, and 2 other
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
