import React from "react";
import Link from "next/link"
import styles from "../styles/components/Music.module.scss"
import { Music } from "@types"

export const MusicInfo: React.FC<{ music: Music }> = ({ music }) => {
  return (
    <div className={styles.music_card}>
      <Link href={music.name} passHref>
        <>
          <img src={music.img} alt="artist image"/>
          <p>{music.name}</p>
        </>
      </Link>
    </div>
  );
};