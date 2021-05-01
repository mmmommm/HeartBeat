import React from "react";
import Link from "next/link";
import styles from "../styles/components/SongInfo.module.scss";
import { Song } from "../types";
import Image from 'next/image';

export const SongInfo: React.FC<{ song: Song }> = ({ song }) => {
  return (
    <Link
      href={{
        pathname: `/${song.artist}/${song.name}`,
        query: { song: song.name },
      }}
      as={`/${song.artist}/${song.name}`}
      passHref
    >
      <div className={styles.music_card}>
        <Image
          src={`/song/${song?.name}.jpg`}
          alt="song"
          width={200}
          height={200}
        />
        <p>{song.artist}</p>
        <p>{song.name}</p>
      </div>
    </Link>
  );
};
