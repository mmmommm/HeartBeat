import React from "react";
import styles from "../styles/pages/index.module.scss";
import { Layout } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { SongInfo } from "../components/SongInfo";

const artists = [
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
];

const songs = [
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
  {artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},{artist: "zutomayo",name: "サターン",img: "sample.png"},
];

const Index: React.FC = () => {
  return (
    <>
      <Layout>
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
          <p className={styles.font}>Music index</p>
          <div className={styles.index}>
            {songs.map((song, i) => {
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
export default Index;
