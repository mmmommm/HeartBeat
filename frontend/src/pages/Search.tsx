import React, { useContext } from "react";
import styles from "../styles/pages/Search.module.scss";
import { Layout, SearchConditionContext } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Artists, Songs } from "../types";
import axios from "axios";

const Search: React.VFC = () => {
  const { state } = useContext(SearchConditionContext)
  const [filteredArtists, setFilteredArtists] = React.useState<Artists>([]);
  const [filteredSongs, setFilteredSongs] = React.useState<Songs>([]);
  
  const Search = () => {
    axios.get(`http://localhost:8080/v1/artist/${state.value}`)
      .then((res) => setFilteredArtists(res.data))
      .catch(() => {
        axios.get(`http://localhost:8080/v1/song/${state.value}`)
          .then((res) => setFilteredSongs(res.data))
      })
  }
  return (
    <>
      <Layout>
        <div>
          <p className={styles.font}>Artist</p>
          <div className={styles.index}>
            {filteredArtists.map((artist, i) => {
              return (
                <ArtistInfo artist={artist} key={i} />
              )
            })}
          </div>
        </div>
        <div>
          <p className={styles.font}>Song</p>
          <div className={styles.index}>
            {filteredSongs.map((song, i) => {
              return (
                <SongInfo song={song} key={i} />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
