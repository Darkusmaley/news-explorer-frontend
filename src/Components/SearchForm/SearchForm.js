import "./SearchForm.css";
import { useForm } from "react-hook-form";

const SearchBar = ({ handleSearch }) => {
  const { register, handleSubmit, formState: errors } = useForm();

  const handleSearchSubmit = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <div className="searchbar">
      <form
        className="searchbar__form"
        onSubmit={handleSubmit(handleSearchSubmit)}
      >
        <input
          type="search"
          className="searchbar__input"
          placeholder="Enter topic"
          {...register("keyword", { required: "Please enter keyword" })}
        />
        {errors?.keyword && <p>{errors.keyword.message}</p>}
        <button className="searchbar__button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
