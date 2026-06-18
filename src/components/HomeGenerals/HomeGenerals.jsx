import "./HomeGenerals.scss";

import smitImg from "../../assets/images/generals/smit.png";
import lesterImg from "../../assets/images/generals/lester.png";
import ketrinImg from "../../assets/images/generals/ketrin.png";
import jonImg from "../../assets/images/generals/jon.png";
import oralImg from "../../assets/images/generals/oral.png";
import devidImg from "../../assets/images/generals/devid.png";

const generals = [
  {
    name: "Смит Вигглсворт",
    years: "1859–1947",
    description: "Апостол веры, известный служением исцеления и чудес.",
    image: smitImg,
  },
  {
    name: "Лестер Самралл",
    years: "1913–1996",
    description:
      "Миссионер и евангелист, посвятивший жизнь проповеди Евангелия.",
    image: lesterImg,
  },
  {
    name: "Кэтрин Кульман",
    years: "1907–1976",
    description:
      "Евангелистка, чье служение сопровождалось чудесами исцеления.",
    image: ketrinImg,
  },
  {
    name: "Джон Г. Лейк",
    years: "1870–1935",
    description: "Пионер исцелительного служения и миссионер в Африке.",
    image: jonImg,
  },
  {
    name: "Орал Робертс",
    years: "1918–2009",
    description: "Евангелист, донесший послание веры миллионам людей.",
    image: oralImg,
  },
  {
    name: "Дэвид Вилкерсон",
    years: "1931–2011",
    description: "Проповедник покаяния и автор книги «Крест и нож».",
    image: devidImg,
  },
];

function HomeGenerals() {
  return (
    <section className="general">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Гиганты духа</h2>

          <button className="section-header__button btn">Смотреть всех</button>
        </div>

        <div className="general__grid">
          {generals.map((general) => (
            <article className="general-card" key={general.name}>
              <div className="general-card__image">
                <img src={general.image} alt={general.name} />
              </div>

              <div className="general-card__content">
                <h3 className="general-card__name">{general.name}</h3>

                <span className="general-card__years">{general.years}</span>

                <p className="general-card__description">
                  {general.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <a
          href="https://www.youtube.com/@generalsoffaith"
          target="_blank"
          rel="noreferrer"
          className="videos__mobile-btn btn"
        >
          Смотреть всех
        </a>
      </div>
    </section>
  );
}

export default HomeGenerals;
