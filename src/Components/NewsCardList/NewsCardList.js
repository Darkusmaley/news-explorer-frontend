import { useContext } from "react";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = ({ newsCard }) => {
  const currentUser = useContext({ CurrentUserContext });
  // const filterCards = savedArticles.filter((card) => {
  //   return card.tag === savedArticles.tag;
  // });
  return (
    <section className="news-card-list">
      {newsCard
        .filter((article) => article.owner === currentUser._id)
        .map((article) => {
          return <NewsCard newsData={article} key={article.link} />;
        })}
    </section>
  );
};

export default NewsCardList;
