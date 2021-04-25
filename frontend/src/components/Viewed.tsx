import React from "react";
import styles from "../styles/components/Viewed.module.scss";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Artists, Songs } from "../types";
import { Axios } from "../utils/axios";

export const Latest: React.FC = () => {
  const [viewedArtists, setViewedArtists] = React.useState<Artists>([]);
  const [viewedSongs, setViewedSongs] = React.useState<Songs>([]);
  React.useEffect(() => {
    Axios.get("/v1/artist/viewed")
      .then((res) => {
        const data = res.data
        setViewedArtists(data)
      })
  }, []);
  React.useEffect(() => {
    Axios.get("/v1/song/viewed")
      .then((res) => {
        const data = res.data
        setViewedSongs(data)
      })
  }, []);
  return (
    <>
      <p className={styles.font}>Most viewed</p>
      <div>
        <p className={styles.font}>Artist index</p>
        <div className={styles.index}>
          {viewedArtists.map((artist, i) => {
            return (
              <ArtistInfo artist={artist} key={i} />
            )
          })}
        </div>
      </div>
      <div>
        <p className={styles.font}>Song index</p>
        <div className={styles.index}>
          {viewedSongs.map((song, i) => {
            return (
              <SongInfo song={song} key={i} />
            )
          })}
        </div>
      </div>
    </>
  );
};
