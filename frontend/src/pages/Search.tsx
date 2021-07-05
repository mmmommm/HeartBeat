import React, { useEffect, useContext } from "react";
import styles from "../styles/pages/Search.module.scss";
import { SearchConditionContext } from "../pages/_app";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Latest } from "../components/Latest";
import { Artists, Songs } from "../types";
import { Axios } from "../utils/axios";

const Search: React.VFC = () => {
  const { state } = useContext(SearchConditionContext);
  const [filteredArtists, setFilteredArtists] = React.useState<Artists>([]);
  const [filteredSongs, setFilteredSongs] = React.useState<Songs>([]);
  useEffect(() => {
    if (state?.value !== "" && state?.isEnter) {
      Axios.get(`/v1/artist/${state?.value}`)
        .then((res) => setFilteredArtists(res.data))
        .then(() => {
          Axios.get(`/v1/song/${state?.value}`).then((response) =>
            setFilteredSongs(response.data)
          );
        })
        .catch(() => alert("article not found"));
    }
  }, [state?.isEnter]);
  console.log(filteredArtists);
  return (
    <>
      {filteredArtists ? (
        <>
          <div>
            <p className={styles.font}>Artist</p>
            <div className={styles.index}>
              {filteredArtists.map((artist, i) => {
                return <ArtistInfo artist={artist} key={i} />;
              })}
            </div>
          </div>
          <div>
            <p className={styles.font}>Song</p>
            <div className={styles.index}>
              {filteredSongs.map((song, i) => {
                return <SongInfo song={song} key={i} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <Latest />
      )}
    </>
  );
};

export default Search;
