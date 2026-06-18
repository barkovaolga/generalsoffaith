import "./HomeBooks.scss";
import { Link } from "react-router-dom";
import lesterBook from "../../assets/images/books/lester.png";
import oralBook from "../../assets/images/books/oral.png";
import haginBook from "../../assets/images/books/heygin.png";
import andrewBook from "../../assets/images/books/endry.png";
import hayesBook from "../../assets/images/books/heys.png";
import kennetBook from "../../assets/images/books/kennet.png";
const books = [
  {
    author: "Лестер Самралл",
    title: "Пионеры веры",
    image: lesterBook,
  },
  {
    author: "Орал Робертс",
    title: "Ожидайте чуда",
    image: oralBook,
  },
  {
    author: "Кеннет Хейгин",
    title: "Исцеление в Библии",
    image: haginBook,
  },
  {
    author: "Эндрю Уоммак",
    title: "Как лучше молиться",
    image: andrewBook,
  },
  {
    author: "Норвел Хэйс",
    title: "Как жить и не умирать",
    image: hayesBook,
  },
  {
    author: "Кеннет Хейгин",
    title: "Неопознанная сила хвалы",
    image: kennetBook,
  },
];

function HomeBooks() {
  return (
    <section className="book">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Популярные книги</h2>

          <button className="section-header__button btn" to="/books">
            Смотреть все
          </button>
        </div>

        <div className="book__grid">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <div className="book-card__cover">
                <img src={book.image} alt={book.title} />
              </div>

              <h3 className="book-card__author">{book.author}</h3>

              <p className="book-card__title">{book.title}</p>
            </article>
          ))}
        </div>
        <Link to="/books" className="videos__mobile-btn btn">
          Смотреть все
        </Link>
      </div>
    </section>
  );
}

export default HomeBooks;
