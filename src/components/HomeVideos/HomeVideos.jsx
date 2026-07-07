import { useEffect, useState } from "react";
import { getVideos } from "../../services/youtube";
import VideoCard from "../VideoCard/VideoCard";
import "./HomeVideos.scss";
import { ArrowRight } from "lucide-react";

function HomeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const data = await getVideos();

      setVideos(data.videos.slice(0, 4));
    }

    loadVideos();
  }, []);

  return (
    <section className="videos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title">Смотрите наши новые видео</h2>

          <a
            href="https://www.youtube.com/@generalsoffaith"
            target="_blank"
            rel="noreferrer"
            className="section-header__button btn"
          >
            Перейти на канал
            <ArrowRight className="btn__arrow" size={22} strokeWidth={2} />
          </a>
        </div>

        <div className="videos__grid">
          {videos.map((video) => (
            <VideoCard
              key={video.snippet?.resourceId?.videoId || video.id?.videoId}
              video={video}
            />
          ))}
        </div>
        <a
          href="https://www.youtube.com/@generalsoffaith"
          target="_blank"
          rel="noreferrer"
          className="videos__mobile-btn btn"
        >
          Перейти на канал
        </a>
      </div>
    </section>
  );
}

export default HomeVideos;
