import "./VideosFilter.scss";
import allImg from "../../assets/images/video/generals/all.jpg";
import lesterImg from "../../assets/images/video/generals/lester.jpg";
import robertsImg from "../../assets/images/video/generals/roberts.jpg";
import wilkersonImg from "../../assets/images/video/generals/wilkerson.jpg";
import princeImg from "../../assets/images/video/generals/prince.jpg";
import haginImg from "../../assets/images/video/generals/hagin.jpg";
import choImg from "../../assets/images/video/generals/cho.jpg";
import wigglesworthImg from "../../assets/images/video/generals/wigglesworth.png";
import lakeImg from "../../assets/images/video/generals/lake.png";
import kuhlmanImg from "../../assets/images/video/generals/kuhlman.jpg";
import allenImg from "../../assets/images/video/generals/allen.png";
import shambachImg from "../../assets/images/video/generals/shambach.jpg";
import coeImg from "../../assets/images/video/generals/coe.jpg";
import osbornImg from "../../assets/images/video/generals/osborn.jpg";
import daisyImg from "../../assets/images/video/generals/daisy.jpg";
import johnOsteenImg from "../../assets/images/video/generals/johnOsteen.jpg";
import dodiImg from "../../assets/images/video/generals/dodi.jpg";
import hayesImg from "../../assets/images/video/generals/hayes.jpg";
import coleImg from "../../assets/images/video/generals/cole.jpg";
import bonnkeImg from "../../assets/images/video/generals/bonnke.jpg";
import corrieImg from "../../assets/images/video/generals/corrie.jpg";
import parsleyImg from "../../assets/images/video/generals/parsley.jpg";
import blakeImg from "../../assets/images/video/generals/blake.jpg";
import ramirezImg from "../../assets/images/video/generals/ramirez.jpg";

const ministers = [
  { id: "all", name: "Все служители", image: allImg },
  { id: "lester", name: "Лестер Самралл", image: lesterImg },
  { id: "roberts", name: "Орал Робертс", image: robertsImg },
  { id: "wilkerson", name: "Дэвид Вилкерсон", image: wilkersonImg },
  { id: "prince", name: "Дерек Принс", image: princeImg },
  { id: "hagin", name: "Кеннет Хейгин", image: haginImg },
  { id: "cho", name: "Йонгги Чо", image: choImg },
  { id: "wigglesworth", name: "Смит Вигглсворт", image: wigglesworthImg },
  { id: "lake", name: "Джон Лейк", image: lakeImg },
  { id: "kuhlman", name: "Кэтрин Кульман", image: kuhlmanImg },
  { id: "allen", name: "А.А. Аллен", image: allenImg },
  { id: "shambach", name: "Р.У. Шамбах", image: shambachImg },
  { id: "coe", name: "Джек Коу", image: coeImg },
  { id: "osborn", name: "Т. Л. Осборн", image: osbornImg },
  { id: "daisy", name: "Дэйзи Осборн", image: daisyImg },
  { id: "johnOsteen", name: "Джон Остин", image: johnOsteenImg },
  { id: "dodi", name: "Доди Остин", image: dodiImg },
  { id: "hayes", name: "Норвел Хэйс", image: hayesImg },
  { id: "cole", name: "Эдвин Луис Коул", image: coleImg },
  { id: "bonnke", name: "Рейнхард Боннке", image: bonnkeImg },
  { id: "corrie", name: "Корри тен Бум", image: corrieImg },
  { id: "parsley", name: "Род Парсли", image: parsleyImg },
  { id: "blake", name: "Карри Блейк", image: blakeImg },
  { id: "ramirez", name: "Джон Рамирес", image: ramirezImg },
];
function VideosFilter({
  category,
  setCategory,
  minister,
  setMinister,
  search,
  setSearch,
}) {
  return (
    <aside className="videos-filter">
      <div className="filter-section">
        <div className="filter-search">
          <input
            type="text"
            placeholder="Поиск видео..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h3 className="filter-title">КАТЕГОРИИ</h3>

        <label className="filter-radio">
          <input
            type="radio"
            name="category"
            checked={category === "all"}
            onChange={() => setCategory("all")}
          />
          <span>Все видео</span>
        </label>

        <label className="filter-radio">
          <input
            type="radio"
            name="category"
            checked={category === "sermons"}
            onChange={() => setCategory("sermons")}
          />
          <span>Проповеди</span>
        </label>

        <label className="filter-radio">
          <input
            type="radio"
            name="category"
            checked={category === "audiobooks"}
            onChange={() => setCategory("audiobooks")}
          />
          <span>Аудиокниги</span>
        </label>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">СЛУЖИТЕЛИ</h3>

        {ministers.map((item) => (
          <div
            key={item.id}
            className={`filter-person ${minister === item.id ? "active" : ""}`}
            onClick={() => {
              if (item.id === "all") {
                setMinister("all");
              } else {
                setCategory("all");
                setMinister(item.id);
              }

              document.getElementById("videos-top")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export { ministers };
export default VideosFilter;
