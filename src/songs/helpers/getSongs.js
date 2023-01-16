import { get } from "../../commons/hooks/get";

export const getSongs = async (id) => {
  const songResponse = await get(`/albums/${id}/songs`);

  const cards = songResponse
    .find(({ album }) => String(album) === id)
    .songs.map((img) => ({
      id: img.id,
      name: img.name,
      duration_ms: img.duration_ms,
      preview_url: img.preview_url,
    }));

  return cards;
};

export const getAlbum = async (id) => {
  const songResponse = await get(`/albums`);

  const cards = songResponse
    .find((artist) => artist.albums.some((album) => String(album.id) === id))
    .albums.find((album) => String(album.id) === id);
  return cards;
};

export const getSuggestion = async () => {
  const songResponse = await get("/artists/");

  const cards = songResponse.map((img) => ({
    id: img.id,
    name: img.name,
    image: img.image,
    popularity: img.popularity,
  }));
  return cards;
};
