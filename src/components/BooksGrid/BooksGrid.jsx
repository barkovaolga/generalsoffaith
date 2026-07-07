import "./BooksGrid.scss";
import lesterBook from "../../assets/images/books/lester.png";
import oralBook from "../../assets/images/books/oral.png";
import haginBook from "../../assets/images/books/heygin.png";
import andrewBook from "../../assets/images/books/endry.png";
import hayesBook from "../../assets/images/books/heys.png";
import kennetBook from "../../assets/images/books/kennet.png";
import stritBook from "../../assets/images/books/strit.png";
import henterBook from "../../assets/images/books/henter.png";
import ketrinBook from "../../assets/images/books/ketrin.png";
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
  {
    author: "Чарльз Хантер",
    title: "Исцеление больных",
    image: henterBook,
  },
  {
    author: "Кетрин Кульман",
    title: "Исцеляющие слова",
    image: ketrinBook,
  },
  {
    author: "Томми Уэлчел",
    title: "Азуза-стрит",
    image: stritBook,
  },
];

function BooksGrid() {
  return (
    <section className="books">
      <div className="container">
        <div className="books__grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} />

              <h3 className="book-card__title">{book.title}</h3>

              <p className="book-card__author">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BooksGrid;
