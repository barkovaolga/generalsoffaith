import "./Hero.scss";
import hero1Image from "../../assets/hero1.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__subtitle">Вера, мужество, наследие</span>

          <h1 className="hero__title">
            Generals <br />
            of Faith
          </h1>

          <p className="hero__quote">
            "Помните наставников ваших, которые проповедовали вам Слово Божие,
            и, взирая на кончину их жизни, подражайте вере их."
            <br />
            Евр 13:7
          </p>

          <button className="hero__button">Смотреть проповеди</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
