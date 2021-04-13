import React from "react";
import Link from "next/link";
import styles from "../styles/components/ArtistInfo.module.scss";
import { Artist } from "../types";
import Image from 'next/image';

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
        <Image
          src={`/artist/${artist?.name}.jpeg`}
          alt="artist"
          width={200}
          height={200}
        />
        <p>{artist.name}</p>
      </div>
    </Link>
  );
};
