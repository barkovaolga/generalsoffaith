import { Link } from "react-router-dom";
import logoWhite from "../../assets/images/logo_white.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__about">
            <Link to="/" className="footer__logo">
              <img src={logoWhite} alt="Generals of Faith" />
            </Link>

            <p className="footer__text">
              Мы рассказываем истории тех, кто оставил неизгладимый след в
              Божьем Царстве.
            </p>
          </div>

          <div className="footer__nav">
            <h3 className="footer__title">НАВИГАЦИЯ</h3>

            <ul className="footer__list">
              <li>
                <Link to="/videos">Видео</Link>
              </li>

              <li>
                <Link to="/">Биографии</Link>
              </li>

              <li>
                <Link to="/books">Книги</Link>
              </li>

              <li>
                <Link to="/">Контакты</Link>
              </li>
            </ul>
          </div>

          <div className="footer__social">
            <h3 className="footer__title">СЛЕДИТЕ ЗА НАМИ</h3>

            <div className="footer__icons">
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>

            <a
              href="mailto:generalsoffaith777@gmail.com"
              className="footer__mail"
            >
              generalsoffaith777@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
