import React from "react";
import styles from "../styles/pages/Search.module.scss";
import { Layout } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Artists, Songs } from "../types";

const Search: React.VFC = () => {
  const [filteredArtists, setFilteredArtists] = React.useState<Artists>([]);
  const [filteredSongs, setFilteredSongs] = React.useState<Songs>([]);
  return (
    <>
      <Layout>
        <div className={styles.search}>
          <form action="/">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search" />
          </form>
        </div>
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
