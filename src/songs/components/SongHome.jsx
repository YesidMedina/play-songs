export const SongHome = ({ album, setSongPlay, ...song }) => {
  const { name, index, duration_ms } = song;

  let msToHhmm = (ms) => {
    let minutes = Math.floor(ms / 60 / 1000);
    let second = Math.floor((ms - minutes * 60 * 1000) / 1000);
    return `${minutes}:${second}`;
  };

  return (
    <>
      <div className="song-home" onClick={() => setSongPlay(song)}>
        <div className="song1-home">
          <li>
            {index} <span>{name}</span>
          </li>
        </div>
        <div className="duration">
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            {msToHhmm(duration_ms)}
          </div>
        </div>
      </div>
    </>
  );
};
