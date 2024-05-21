import "./Footer.css";
import { Link } from "react-router-dom";
import GitHubLogo from "../../Images/github.svg";
import FacebookLogo from "../../Images/fb.svg";
function Footer() {
  return (
    <footer className="footer app__section">
      <div className="footer__info">
        <h2 className="footer__trademark">
          © 2021 Supersite, Powered by News API
        </h2>
        <div className="footer__links">
          <div className="footer__links-left">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <a
              href="https://tripleten.com/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__links-social">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src={GitHubLogo} className="footer__link-github"  alt="github logo"/>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FacebookLogo} className="footer__link-facebook" alt="facebook logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
