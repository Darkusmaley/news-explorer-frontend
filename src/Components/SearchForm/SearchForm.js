import "./SearchForm.css";

function SearchBar({ onsubmit }) {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="search"
          className="searchbar__input"
          placeholder="Enter topic"
        ></input>
        <button className="searchbar__button"> Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
