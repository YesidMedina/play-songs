import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerSong } from "../components/PlayerSong";
import { SongHeader } from "../components/SongHeader";
import { SongHome } from "../components/SongHome";
import { SuggestionSong } from "../components/SuggestionSong";
import { getAlbum, getSongs, getSuggestion } from "../helpers/getSongs";

export const SongPage = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState({});
  const [artist, setArtist] = useState([]);
  const [songPlay, setSongPlay] = useState({});
  const getImages = async () => {
    const newImages = await getSongs(id);
    setSongs(newImages);
  };
  const getHeader = async () => {
    const newImages = await getAlbum(id);
    setAlbum(newImages);
  };
  const getSuge = async () => {
    const newImages = await getSuggestion();
    setArtist(newImages);
  };

  useEffect(() => {
    getImages();
    getHeader();
    getSuge();
  }, []);

  return (
    <>
      <div className="song-back">
        <SongHeader key={album.id} {...album} />
      </div>

      <div className="song">Canciones</div>

      <div className="">
        {songs.map((song) => (
          <SongHome
            setSongPlay={setSongPlay}
            album={album}
            key={song.id}
            {...song}
          />
        ))}
      </div>
      <div className="song">Sugerencias</div>
      <div>
        {artist.map((artist) => (
          <SuggestionSong key={artist.id} {...artist} />
        ))}
      </div>
      <div className="player1">
        <PlayerSong songs={songs} songPlay={songPlay} album={album} />
      </div>
    </>
  );
};
