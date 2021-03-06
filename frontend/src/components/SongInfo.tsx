import React from "react";
import Link from "next/link";
import styles from "../styles/components/Music.module.scss";
import { Song } from "@../frontend/src/types";

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
        <img src={song.img} alt="song" />
        <p>{song.name}</p>
      </div>
    </Link>
  );
};
