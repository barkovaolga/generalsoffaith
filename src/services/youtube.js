const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const SERMONS_PLAYLIST = "PLcywffnvDGqxJJ4D9zgLIeY-0FpqmaX1T";
const AUDIOBOOKS_PLAYLIST = "PLcywffnvDGqzpI_7ERXCFOrqEsYDHf5Af";
const ALL_VIDEOS_PLAYLIST = "UUbDPQZszN2oatau1MNRHbgA";
const MINISTER_PLAYLISTS = {
  lester: "PLcywffnvDGqya0YjC1-_vJcA_3lZvIt-K",
  roberts: "PLcywffnvDGqyw5Y5JN5yP0CN5zE7EkOAH",
  kuhlman: "PLcywffnvDGqxxjSmCj6j0U22qFMfymOpa",
  lake: "PLcywffnvDGqz_yoC5e3VjtT8O82il79a7",
  wilkerson: "PLcywffnvDGqw3X8ZHzuL4Gug9g_Z03jZX",
  prince: "PLcywffnvDGqwwFFHgktCBfU6t0b7ftG3A",
  hagin: "PLcywffnvDGqwTossWioHhNVKlHDr3DLvX",
  cho: "PLcywffnvDGqyIX9mjbAyA5qXQO5R1PjPJ",
  wigglesworth: "PLcywffnvDGqyKGBgXbuctdRSmDXQON1O6",
  allen: "PLcywffnvDGqzS6wuKf60_VK3O_GHuRaZ7",
  coe: "PLcywffnvDGqzGxef3Zctn9287LWQI310L",
  osborn: "PLcywffnvDGqzmnevI4oRZgmrDrs8SYyKD",
  daisy: "PLcywffnvDGqzWI7wWKN9Pa-dPX93QkgQf",
  johnOsteen: "PLcywffnvDGqzHxEJj7pMZf-YQNQkuWIdQ",
  dodi: "PLcywffnvDGqxtbRN5HXRkLPN3pWhQ2jak",
  hayes: "PLcywffnvDGqxO8B-lCB93wNoTpoQtubei",
  cole: "PLcywffnvDGqxQmxG0kTH_ZSN_uNa4YHqm",
  bonnke: "PLcywffnvDGqwzxyuPaDZB-VOM8lU0KrZl",
  corrie: "PLcywffnvDGqyTVwMTfkkZSbvWZkHIUOiX",
  parsley: "PLcywffnvDGqzi_ZaMvsVaOMo0HABATq-9",
  blake: "PLcywffnvDGqwSkpNTVN5-yef8CXUwH8h9",
  ramirez: "PLcywffnvDGqxCJ3JwcQJwN9kawB3SKEdm",
  shambach: "PLcywffnvDGqwyeBRtv5CxQD8UD3bSSF_r",
};

export async function getVideos(
  pageToken = "",
  category = "all",
  minister = "all",
) {
  let url = "";
  if (minister !== "all") {
    url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?key=${API_KEY}` +
      `&playlistId=${MINISTER_PLAYLISTS[minister]}` +
      `&part=snippet` +
      `&maxResults=28` +
      `&pageToken=${pageToken}`;
  } else if (category === "sermons") {
    url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?key=${API_KEY}` +
      `&playlistId=${SERMONS_PLAYLIST}` +
      `&part=snippet` +
      `&maxResults=24` +
      `&pageToken=${pageToken}`;
  } else if (category === "audiobooks") {
    url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?key=${API_KEY}` +
      `&playlistId=${AUDIOBOOKS_PLAYLIST}` +
      `&part=snippet` +
      `&maxResults=24` +
      `&pageToken=${pageToken}`;
  } else {
    url =
      `https://www.googleapis.com/youtube/v3/playlistItems` +
      `?key=${API_KEY}` +
      `&playlistId=${ALL_VIDEOS_PLAYLIST}` +
      `&part=snippet` +
      `&maxResults=50` +
      `&pageToken=${pageToken}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  if (data.error) {
    console.error(data.error);

    return {
      videos: [],
      nextPageToken: "",
    };
  }

  const videoIds = data.items
    .map((video) => video.snippet?.resourceId?.videoId)
    .filter(Boolean)
    .join(",");

  const detailsResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=contentDetails&id=${videoIds}`,
  );

  const detailsData = await detailsResponse.json();

  const durations = {};

  detailsData.items.forEach((item) => {
    durations[item.id] = item.contentDetails.duration;
  });

  const filteredVideos = data.items.filter((video) => {
    const videoId = video.snippet?.resourceId?.videoId;

    const duration = durations[videoId];

    if (!duration) return false;

    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    const hours = Number(match?.[1] || 0);
    const minutes = Number(match?.[2] || 0);
    const seconds = Number(match?.[3] || 0);

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    return totalSeconds >= 120;
  });

  return {
    videos: filteredVideos,
    nextPageToken: data.nextPageToken || "",
  };
}
