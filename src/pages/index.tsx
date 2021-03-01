import React from "react";
import styles from "../styles/pages/index.module.scss";
import { Layout } from "../components/Layout";
import { ArtistInfo } from "../components/ArtistInfo";
import { MusicInfo } from "../components/MusicInfo";

const artists = [
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
  {name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},{name: "zutomayo",img: "sample.png"},
]

const musics = [
  {name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},
  {name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},
  {name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},
  {name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},
  {name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},{name: "サターン",img: "sample.png"},
]

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
            {musics.map((music, i) => {
              return (
                <MusicInfo music={music} key={i} />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Index;