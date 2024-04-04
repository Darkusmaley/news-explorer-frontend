import "./About.css";
import Marcus from "../../Images/MarcusAley.png";
function About() {
  return (
    <about className="about app__section">
      <div className="about__info">
        <img src={Marcus} alt="Picture of author" className="about__image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <h3 className="about__subtext">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </h3>
        </div>
      </div>
    </about>
  );
}

export default About;
