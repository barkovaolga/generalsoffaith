import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo.png";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Generals Of Faith" />
          </Link>
        </div>

        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <div className="header__mobile-top">
            <img src={logo} alt="Generals Of Faith" />

            <button
              className="header__close"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </div>

          <button className="header__donate">Пожертвовать</button>

          <ul className="header__menu">
            <li className="header__menu-item">
              <Link
                to="/"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                Главная
              </Link>
            </li>

            <li className="header__menu-item">
              <Link
                to="/videos"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                Видео
              </Link>
            </li>

            <li className="header__menu-item">
              <Link
                to="/books"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                Книги
              </Link>
            </li>

            {/* <li className="header__menu-item">
              <Link
                to="/history"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                История
              </Link>
            </li> */}

            <li className="header__menu-item">
              <Link
                to="/community"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                Цитаты
              </Link>
            </li>

            <li className="header__menu-item">
              {/* <Link
                to="/about"
                className="header__menu-link"
                onClick={() => setMenuOpen(false)}
              >
                О нас
              </Link> */}
            </li>
          </ul>

          <div className="header__social">
            <h3 className="header__title">СЛЕДИТЕ ЗА НАМИ</h3>
            <div className="header__icons">
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
              className="header__mail"
            >
              generalsoffaith777@gmail.com
            </a>
          </div>
        </nav>

        <button
          className="header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={32} />
        </button>
      </div>
    </header>
  );
}

export default Header;
