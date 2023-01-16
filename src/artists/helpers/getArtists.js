import { get } from "../../commons/hooks/get";

export const getArtists = async () => {
  const artistResponse = await get('/artists/')

  const cards = artistResponse.map((img) => ({
    id: img.id,
    name: img.name,
    image: img.image,
  }));
  return cards;
};
