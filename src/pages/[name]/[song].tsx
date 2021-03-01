import * as React from "react";
import styles from "../../styles/pages/Song.module.scss";
// import { NextPage, GetServerSideProps } from "next";
import { Layout } from "../../components/Layout";
import { Song } from "@types";
import { useRouter } from "next/router";

const Page: React.FC<{ song: Song }> = ({ song }) => {
  const router = useRouter()
  const song_name = router.query.song;

  return (
    <Layout>
      <header className={styles.header}>
        <p>{song_name}</p>
        <article>
          saturn is a song by zutomayo
        </article>
      </header>
    </Layout>
  );
};

export default Page;