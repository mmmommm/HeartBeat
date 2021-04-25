import React from "react";
import styles from "../styles/components/Latest.module.scss";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Artists, Songs } from "../types";
import { Axios } from "../utils/axios";

export const Latest: React.FC = () => {
  const [latestArtists, setLatestArtists] = React.useState<Artists>([]);
  const [latestSongs, setLatestSongs] = React.useState<Songs>([]);
  React.useEffect(() => {
    Axios.get("/v1/artist/latest")
      .then((res) => {
        const data = res.data
        setLatestArtists(data)
      })
  }, []);
  React.useEffect(() => {
    Axios.get("/v1/song/latest")
      .then((res) => {
        const data = res.data
        setLatestSongs(data)
      })
  }, []);
  return (
    <>
      <p className={styles.font}>Recently updated</p>
      <div>
        <p className={styles.font}>Artist index</p>
        <div className={styles.index}>
          {latestArtists.map((artist, i) => {
            return (
              <ArtistInfo artist={artist} key={i} />
            )
          })}
        </div>
      </div>
      <div>
        <p className={styles.font}>Song index</p>
        <div className={styles.index}>
          {latestSongs.map((song, i) => {
            return (
              <SongInfo song={song} key={i} />
            )
          })}
        </div>
      </div>
    </>
  );
};
