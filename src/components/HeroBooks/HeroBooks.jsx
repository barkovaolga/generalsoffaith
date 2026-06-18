import heroBooks from "../../assets/images/books-hero.jpg";
import "./HeroBooks.scss";
function HeroBooks() {
  return (
    <section
      className="hero-page hero-page-book"
      style={{
        backgroundImage: `url(${heroBooks})`,
      }}
    >
      <div className="container hero-page__container">
        <div className="hero-page__content">
          <h1 className="hero-page__title">КНИГИ</h1>

          <p className="hero-page__quote">
            Читайте книги, аудиокниги и материалы великих служителей, которые
            изменили поколения своей верой.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBooks;
