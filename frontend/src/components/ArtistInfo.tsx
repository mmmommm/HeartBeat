import React from "react";
import Link from "next/link";
import styles from "../styles/components/Artist.module.scss";
import { Artist } from "../types";

export const ArtistInfo: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <Link
      href={{
        pathname: `/${artist.name}`,
        query: { name: artist.name },
      }}
      as={`/${artist.name}`}
      passHref
    >
      <div className={styles.artist_card}>
        <>
          <img src={artist.img} alt="artist" />
          <p>{artist.name}</p>
          <p>{artist.content}</p>
        </>
      </div>
    </Link>
  );
};
