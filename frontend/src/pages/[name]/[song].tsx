import React, { useEffect } from "react";
import styles from "../../styles/pages/Song.module.scss";
import { NextPage, GetServerSideProps } from "next";
import { getSong } from "../../utils/api/song";
// import { markdownToHtml } from "../../utils/index";
import { Song } from "../../types";
import markdownHtml from "zenn-markdown-html"
import "zenn-content-css"

type Props = {
  song: Song
}

const Page: NextPage<Props> = (props) => {
  const { song } = props
  useEffect(()=> {
    import('zenn-embed-elements');
  }, [])
  return (
    <header className={styles.header}>
      <p>{song.name}</p>
      <p>{song.artist}</p>
      <article>
        <div
          dangerouslySetInnerHTML={{
            __html: song.content || 'no article',
          }}
        />
      </article>
    </header>
  );
};

export const getServerSideProps: GetServerSideProps = async({ params }) => {
  const name = params.song as string;
  const song = getSong(name);
  if (!song) {
    console.error("song not found")
  }
  const content = markdownHtml(song.content);
  return {
    props: {
      song: {
        ...song,
        content,
        name
      }
    }
  }
}

export default Page;
