import "./NewsCard.css";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext } from "react";
import marcus from "../../Images/MarcusAley.png";

const NewsCard = ({ item }) => {
  // const currentUser = useContext(CurrentUserContext);
  //   const id = item._id; for user identification later
  return (
    <section className="card__container">
      <div className="card__top-display">
        <div className="card__tag-container">
          <h2 className="card__tag">Nature</h2>
        </div>
        <button type="button" className="card__delete-button"></button>
      </div>
      <img src={marcus} alt="" className="card__image"></img>
      <h2 className="card__bookmark_date">November 4, 2020</h2>
      <h2 className="card__title">Roar</h2>
      <h2 className="card__description">asdasd</h2>
      <h2 className="card__article_source">asdasd</h2>
    </section>
  );
};

export default NewsCard;
