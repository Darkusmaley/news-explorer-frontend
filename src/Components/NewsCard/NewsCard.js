import "./NewsCard.css";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { useContext } from "react";
import marcus from "../../Images/MarcusAley.png";

const NewsCard = ({ newsData }) => {
  // const currentUser = useContext(CurrentUserContext);
  //   const id = item._id; for user identification later
  const publishDate = new Date().toLocaleString("default", {
    month: "Long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="card__container">
      <div className="card__top-display">
        <div className="card__tag-container">
          <h2 className="card__tag">{newsData.tag}</h2>
        </div>
        <button type="button" className="card__delete-button"></button>
      </div>
      <img
        src={newsData.url}
        alt={newsData.title}
        className="card__image"
      ></img>
      <h3 className="card__publish_date">{publishDate}</h3>
      <h2 className="card__title">{newsData.title}</h2>
      <p className="card__description">{newsData.description}</p>
      <p className="card__article_source">{newsData.publisher}</p>
    </section>
  );
};

export default NewsCard;
