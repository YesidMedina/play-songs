import { get } from "../../commons/hooks/get";

export const getAlbums = async (id) => {
  const albumResponse = await get(`/artists/${id}/albums`);

  const cards = albumResponse
    .find(({ artist }) => String(artist) === id)
    ?.albums?.map((img) => ({
      id: img.id,
      name: img.name,
      image: img.image,
      tracks: img.total_tracks,
    }));

  return cards;
};

export const getArtist = async (id) => {
  const img = await get(`/artists/${id}`);

  const cards = {
    id: img.id,
    name: img.name,
    image: img.image,
    popularity: img.popularity,
  };

  return cards;
};
