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
          <Link className="footer__link" to="/">
            Home
          </Link>
          <Link className="footer__link">TripleTen</Link>
          <div className="footer__link-social">
            <Link to="">
              <img src={GitHubLogo} className="footer__link-github" />
            </Link>
            <Link to="">
              <img src={FacebookLogo} className="footer__link-facebook" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
