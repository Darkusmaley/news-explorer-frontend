import "./About.css";
import Marcus from "../../Images/MarcusAley.png";
function About() {
  return (
    <section className="about app__section">
      <div className="about__info">
        <img src={Marcus} alt="author" className="about__image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <h3 className="about__subtext">
            Hello! My name is Marcus Daley, a software developer specialized in
            full-stack technologies such React and JavaScript. Being new to the
            tech field, TripleTen has provided me with the skills and experience
            to tackle complicated and challenging projects such as this one. I
            was introduced to software engineering through several of my friends
            and happened to stumble upon TripleTen's bootcamp. From there I
            honed the skills neccessary to develop both front and backend
            projects, along with working with databases and cloud servers.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
