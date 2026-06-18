import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import { getVideos } from "../../services/youtube";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Videos.scss";
import heroVideo from "../../assets/images/video/hero_video.png";
import VideosFilter, {
  ministers,
} from "../../components/VideosFilter/VideosFilter";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [category, setCategory] = useState("all");
  const [minister, setMinister] = useState("all");
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function loadVideos() {
      const data = await getVideos("", category, minister);

      setVideos(data.videos);
      setNextPageToken(data.nextPageToken);
    }

    loadVideos();
  }, [category, minister]);
  async function loadMoreVideos() {
    const data = await getVideos(nextPageToken, category, minister);

    setVideos((prev) => [...prev, ...data.videos]);
    setNextPageToken(data.nextPageToken);
  }
  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Layout>
      <section
        className="hero-page"
        // style={{
        //   backgroundImage: `url(${heroVideo})`,
        // }}
      >
        <div className="container hero-page__container">
          <div className="hero-page__content">
            <h1 className="hero-page__title">ВИДЕО</h1>

            <p className="hero-page__quote">
              Смотрите проповеди, аудиокниги, интервью и документальные
              материалы великих служителей, которые изменили поколения своей
              верой
            </p>
          </div>
        </div>
      </section>

      <section className="videos-page">
        <div className="container">
          <div className="videos-mobile-filters">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Все видео</option>
              <option value="sermons">Проповеди</option>
              <option value="audiobooks">Аудиокниги</option>
            </select>

            <select
              value={minister}
              onChange={(e) => setMinister(e.target.value)}
            >
              {ministers.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <section className="videos-flex">
            <VideosFilter
              category={category}
              setCategory={setCategory}
              minister={minister}
              setMinister={setMinister}
              search={search}
              setSearch={setSearch}
            />
            <div id="videos-top" className="videos-content">
              <h2 className="videos-page-title">Видео</h2>
              <div className="videos-grid">
                {filteredVideos.map((video) => {
                  const videoId =
                    video.id?.videoId || video.snippet?.resourceId?.videoId;

                  return <VideoCard key={videoId} video={video} />;
                })}
              </div>
              {nextPageToken && (
                <div className="pagination">
                  <button className="pagination-btn" onClick={loadMoreVideos}>
                    Показать ещё
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export default Videos;
