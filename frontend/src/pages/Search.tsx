import React from "react";
import styles from "../styles/pages/Search.module.scss";
import { Layout } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const filteredArtists = [
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
];

const filteredSongs = [
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
];

const Search: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.search}>
          <form action="">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="検索" />
          </form>
        </div>
        <div>
          <p className={styles.font}>Artist index</p>
          <div className={styles.index}>
            {filteredArtists.map((artist, i) => {
              return (
                <ArtistInfo artist={artist} key={i} />
              )
            })}
          </div>
        </div>
        <div>
          <p className={styles.font}>Music index</p>
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
