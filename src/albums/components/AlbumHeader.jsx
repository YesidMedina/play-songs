import { AiTwotoneStar } from "react-icons/ai";

export const AlbumHeader = ({ name, image, popularity }) => {
  return (
    <div className="albums">
      <img
        src={image}
        alt={name}
        className="image-albums"
        width="160"
        height="160"
      />
      <div className="title-album">
        {name}
        <span className="start">
          <AiTwotoneStar />{popularity}
        </span>
        
      </div>
    
    </div>
  );
};
