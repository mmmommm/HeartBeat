import React from "react";
import { NextPage, GetServerSideProps } from 'next';
import styles from "../styles/pages/Artist.module.scss";
import { Layout } from "../components/Layout";
import { Artist } from "../types";
import { getArtist } from "../utils/api/artists";
import { markdownToHtml } from "../utils/index";

type Props = {
  artist: Artist
}

const Page: NextPage<Props> = (props) => {
  const { artist } = props

  return (
    <Layout>
      <header className={styles.header}>
        <p>{artist.name}</p>　
        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: artist.content || '✍ 本文を入力してください',
            }}
          />
        </article>
      </header>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async({ params }) => {
  const name = params.name as string;
  const artist = getArtist(name);
  if (!artist) {
    console.error("artist not found")
  }
  const content = markdownToHtml(artist.content);
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