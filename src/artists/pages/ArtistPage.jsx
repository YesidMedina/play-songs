import { useEffect, useState } from "react";
import { Navbar } from "../../ui/components/Navbar";
import { getArtists } from "../helpers/getArtists";
import { ArtistHome } from "../components/ArtistHome";

export const ArtistPage = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getArtists();
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="col">
        {images.map((image) => (
          <ArtistHome key={image.id} {...image} />
        ))}
      </div>
      <div className="footer"></div>
    </>
  );
};
