import "./HomeHistory.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import history1 from "../../assets/images/history/1.png";
import history2 from "../../assets/images/history/2.png";
import history3 from "../../assets/images/history/3.png";
import history4 from "../../assets/images/history/4.png";
import history5 from "../../assets/images/history/5.png";

const historyItems = [
  {
    period: "30–100",
    title: "Ранняя церковь",
    description: "Рождение и рост церкви. Преследования и сила Евангелия.",
    image: history1,
  },
  {
    period: "1517",
    title: "Реформация",
    description: "Возвращение к истине. Писание и оправдание верой.",
    image: history2,
  },
  {
    period: "1722",
    title: "Моравская церковь",
    description: "Молящаяся церковь, посылающая миссионеров по всему миру.",
    image: history3,
  },
  {
    period: "1730–1740",
    title: "Великое пробуждение",
    description: "Духовное пробуждение, которое охватило города и целые нации.",
    image: history4,
  },
  {
    period: "1906",
    title: "Азуза-стрит пробуждение",
    description:
      "Излияние Святого Духа, которое изменило мир и дало начало движению.",
    image: history5,
  },
];

function HomeHistory() {
  return (
    <section className="history">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Эпохи пробуждения</h2>

          <button className="section-header__button btn">
            Исследовать эпохи
          </button>
        </div>

        <div className="history__grid">
          {historyItems.map((item) => (
            <article className="history-card" key={item.title}>
              <div className="history-card__period">{item.period}</div>

              <h3 className="history-card__title">{item.title}</h3>

              <p className="history-card__description">{item.description}</p>

              <div className="history-card__image">
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          ))}
        </div>
        <Swiper
          navigation={true}
          spaceBetween={16}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            425: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="history__slider"
        >
          {historyItems.map((item) => (
            <SwiperSlide key={item.title}>
              <article className="history-card">
                <div className="history-card__period">{item.period}</div>

                <h3 className="history-card__title">{item.title}</h3>

                <p className="history-card__description">{item.description}</p>

                <div className="history-card__image">
                  <img src={item.image} alt={item.title} />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <a
          href="https://www.youtube.com/@generalsoffaith"
          target="_blank"
          rel="noreferrer"
          className="videos__mobile-btn btn"
        >
          Эпохи пробуждения
        </a>
      </div>
    </section>
  );
}

export default HomeHistory;
