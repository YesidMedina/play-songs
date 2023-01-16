export const SongHeader = ({ name, image, total_tracks }) => {
  return (
    <div className="image-song">
      <div className="imag-song">
        <img src={image} alt={name} className="img" width="160" height="150" />
      </div>
      <div className="image1-song">
        <div className="title-song">
          <div className="title1-song">{name}</div>
          <div className="title2-song">
            Álbum ° <span>{name}</span> <br />{" "}
            <span>{total_tracks} canciones</span>
          </div>
          <div className="title3-song"></div>
        </div>
      </div>
    </div>
  );
};
