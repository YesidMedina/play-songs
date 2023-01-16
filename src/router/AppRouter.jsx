import { Navigate, Route, Routes } from "react-router-dom";
import { AlbumPage } from "../albums/pages/AlbumPage";
import { ArtistPage } from "../artists/pages/ArtistPage";
import { SongPage } from "../songs/pages/SongPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="artists" element={<ArtistPage />} />
        <Route path="artists/:id/albums" element={<AlbumPage />} />
        <Route path="albums/:id/songs" element={<SongPage />} />

        <Route path="/" element={<Navigate to="/artists" />} />
      </Routes>
    </>
  );
};
