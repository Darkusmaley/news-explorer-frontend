import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  onSelectCard,
  isLoggedIn,
  handleRegisterModal,
  newsCard,
}) {
  return (
    <section className="saved-news ">
      <div>
        <SavedNewsHeader
          handleRegisterModal={handleRegisterModal}
          isLoggedIn={isLoggedIn}
        />

        <div className="saved-news__group">
          <h3 className="saved-news__title">Saved articles </h3>
          <h3 className="saved-news__subtext">
            Elise, you have 5 saved articles
          </h3>
          <div className="saved-news__search-grouping">
            <h3 className="saved-news__search-text">
              By keywords:
              <span className="saved-news__search-text_bold">
                {" "}
                Nature, Yellowstone, and 2 other
              </span>
            </h3>
          </div>
        </div>
      </div>
      <NewsCardList newsCard={newsCard} />
    </section>
  );
}

export default SavedNews;
