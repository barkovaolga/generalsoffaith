import "./Categories.scss";
import {
  Play,
  BookOpen,
  Quote,
  Landmark,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Видео",
    text: "Проповеди, аудиокниги и архивные материалы.",
    icon: <Play size={32} />,
    link: "/videos",
  },
  {
    title: "Книги",
    text: "Книги, которые формировали поколения и до сих пор меняют жизни.",
    icon: <BookOpen size={32} />,
    link: "/books",
  },
  {
    title: "Цитаты",
    text: "Сильные слова, которые укрепляют веру.",
    icon: <Quote size={32} />,
    link: "/community",
  },
  {
    title: "История",
    text: "Узнайте больше о историческом контексте и наследии.",
    icon: <Landmark size={32} />,
  },
  {
    title: "Биографии",
    text: "Жизнь и служение великих людей веры.",
    icon: <UserRound size={32} />,
  },
];
function Categories() {
  return (
    <section className="category">
      <div className="container">
        <div className="category__grid">
          {categories.map((item) => (
            <Link to={item.link} className="category-card" key={item.title}>
              <div className="category-card__icon">{item.icon}</div>

              <h3 className="category-card__title">{item.title}</h3>

              <p className="category-card__text">{item.text}</p>

              <span className="category-card__link">
                Перейти
                <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
