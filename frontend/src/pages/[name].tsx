import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from 'next';
import styles from "../styles/pages/Artist.module.scss";
import { Artist } from "../types";
import { getArtist } from "../utils/api/artists";
// import { markdownToHtml } from "../utils/index";
import markdownHtml from "zenn-markdown-html"
import "zenn-content-css"

type Props = {
  artist: Artist
}

const Page: NextPage<Props> = (props) => {
  const { artist } = props
  useEffect(()=> {
    import('zenn-embed-elements');
  }, [])
  return (
    <header className={styles.header}>
      <p className={styles.artist_name}>{artist.name}</p>　
      <article className={styles.container}>
        <div
          dangerouslySetInnerHTML={{
            __html: artist.content || 'no article',
          }}
        />
      </article>
    </header>
  );
};

export const getServerSideProps: GetServerSideProps = async({ params }) => {
  const name = params.name as string;
  const artist = getArtist(name);
  if (!artist) {
    console.error("artist not found")
  }
  const content = markdownHtml(artist.content);
  return {
    props: {
      artist: {
        ...artist,
        content,
        name
      }
    }
  }
}

export default Page;