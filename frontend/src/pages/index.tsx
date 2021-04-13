import React from "react";
import styles from "../styles/pages/index.module.scss";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Loading } from "../components/Loading";
import axios from "axios";
import { Artists, Songs } from "../types";

const Index: React.VFC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [artists, setArtists] = React.useState<Artists>([]);
  const [songs, setSongs] = React.useState<Songs>([]);
  React.useEffect(() => {
    axios.get('http://localhost:8080/v1/artists')
      .then((res) => {
        const data = res.data
        setArtists(data)
      })
  }, []);
  React.useEffect(() => {
    axios.get('http://localhost:8080/v1/songs')
      .then((res) => {
        const data = res.data
        setSongs(data)
      })
  }, []);
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div>
            <p className={styles.font}>Artist index</p>
            <div className={styles.index}>
              {artists.map((artist, i) => {
                return (
                  <ArtistInfo artist={artist} key={i} />
                )
              })}
            </div>
          </div>
          <div>
            <p className={styles.font}>Song index</p>
            <div className={styles.index}>
              {songs.map((song, i) => {
                return (
                  <SongInfo song={song} key={i} />
                )
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Index;
