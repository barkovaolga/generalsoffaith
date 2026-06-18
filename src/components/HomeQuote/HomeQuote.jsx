import "./HomeQuote.scss";

function HomeQuote() {
  return (
    <section className="quote-banner">
      <div className="container">
        <div className="quote-banner__content">
          <blockquote className="quote-banner__text">
            Истинный победитель вырастает из того времени, что он провел наедине
            с Богом.
          </blockquote>

          <cite className="quote-banner__author">© Лестер Самралл</cite>
        </div>
      </div>
    </section>
  );
}

export default HomeQuote;
