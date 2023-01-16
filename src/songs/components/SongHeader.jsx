export const SongHeader = ({ name, image, total_tracks }) => {
  return (
    <div className="image-song">
      <div className="image1-song">
        <img src={image} alt={name} className="" width="160" height="150" />

        <div className="title-song">
          <div className="title1-song">{name}</div>
          <div className="title2-song">{name}</div>
          <div className="title3-song">{total_tracks} canciones</div>
        </div>
      </div>
    </div>
  );
};
