import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { AlbumHeader } from "../components/AlbumHeader";
import { AlbumHome } from "../components/AlbumHome";
import { getAlbums, getArtist } from "../helpers/getAlbums";

export const AlbumPage = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState({});
  const getImages = async () => {
    const newImages = await getAlbums(id);
    setAlbums(newImages);
  };
  const getHeader = async () => {
    const newImages = await getArtist(id);
    setArtist(newImages);
  };
  useEffect(() => {
    getImages();
    getHeader();
  }, []);

  return (
    <>
      <Navbar />
      <div className="gradient">
        <AlbumHeader key={artist.id} {...artist} />
      </div>
      <div className="header-album">
        <div className="text-o">Álbunes</div>
        {albums.map((album) => (
          <AlbumHome key={album.id} {...album} />
        ))}
      </div>
    </>
  );
};
