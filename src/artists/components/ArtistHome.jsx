import { Link } from "react-router-dom";

export const ArtistHome = ({ id, name, image }) => {
  return (
    <div className="imag">
      <Link to={`/artists/${id}/albums`}>
        <img
          src={image}
          alt={name}
          className="image-artist"
          width="150"
          height="150"
        />
        <p className="title">{name}</p>
      </Link>
    </div>
  );
};
