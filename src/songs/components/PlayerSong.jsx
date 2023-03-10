import { Link } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { RxStar } from "react-icons/rx";

export const PlayerSong = ({ songPlay, album }) => {
  return (
    <>
      <div className="play">
        <audio controls src={songPlay?.preview_url}></audio>
      </div>
      <div className="play-image">
        <img src={album.image} className="image-play" width="50" height="50" />
      </div>
      <div className="text-play">
        <div className="">{songPlay?.name}</div>
        <div className="name-text">{album.name}</div>
      </div>
      <div className="container1">
        <Link to="/artists">
          <div className="icon-song">
            <FiMoreVertical />
          </div>
        </Link>
        <div className="icon2-song">
          <RxStar />
        </div>
        <div className="icon3-song">
          <RxStar />
        </div>
        <div className="icon4-song">
          <RxStar />
        </div>
      </div>
    </>
  );
};
