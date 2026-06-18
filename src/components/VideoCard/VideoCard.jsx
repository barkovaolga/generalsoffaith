function VideoCard({ video }) {
  const videoId = video.snippet?.resourceId?.videoId || video.id?.videoId;

  return (
    <article className="video-card">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </a>

      <h3>{video.snippet.title}</h3>

      <p>{new Date(video.snippet.publishedAt).toLocaleDateString("ru-RU")}</p>
    </article>
  );
}

export default VideoCard;
