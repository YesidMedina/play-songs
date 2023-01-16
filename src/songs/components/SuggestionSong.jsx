import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

export const SuggestionSong = ({ ...artist }) => {
  const { id, name, popularity } = artist;

  return (
    <>
      <div className="song-sugge">
        <div className="song1-sugge">
          <Link to={`/artists/${id}/albums`}>
            <div className="song-home">
              <li>
                <span>{name}</span>
              </li>
            </div>
            <div className="count">
              <div className="d-flex justify-content-end">
                <AiTwotoneStar />
                {popularity}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
