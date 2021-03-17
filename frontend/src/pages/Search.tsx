import React from "react";
import styles from "../styles/pages/Search.module.scss";
import { Layout } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { Artists, Songs } from "../types";
import axios from "axios";

const Search: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [value, setValue] = React.useState("");
  const [filteredArtists, setFilteredArtists] = React.useState<Artists>([]);
  const [filteredSongs, setFilteredSongs] = React.useState<Songs>([]);
  const Search = () => {
    axios.get(`http://localhost:8080/v1/artist/${value}`)
      .then((res) => setFilteredArtists(res.data))
      .catch(() => {
        axios.get(`http://localhost:8080/v1/song/${value}`)
          .then((res) => setFilteredSongs(res.data))
      })
  }
  const updateValue = (ev) => {
    setValue(ev.target.value)
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
