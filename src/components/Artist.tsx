import React from "react";
import Link from "next/link"
import styles from "../styles/components/Artist.module.scss"
import { Artist } from "@types"

export const ArtistInfo: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <div className={styles.artist_card}>
      <Link href={artist.name} passHref>
        <>
          <img src={artist.img} alt="artist image"/>
          <p>{artist.name}</p>
        </>
      </Link>
    </div>
  );
};