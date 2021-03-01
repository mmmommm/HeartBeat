import * as React from "react";
import styles from "../../styles/pages/Artist.module.scss";
// import { NextPage, GetServerSideProps } from "next";
import { Layout } from "../../components/Layout";
import { Artist } from "@types";
import { useRouter } from "next/router";

const Page: React.FC<{ artist: Artist }> = ({ artist }) => {
  const router = useRouter()
  const artist_name = router.query.name;

  return (
    <Layout>
      <header className={styles.header}>
        <p>{artist_name}</p>
        <article>
          zutomayo is a japanese artist. full name is zuttomayonakadeiinoni.
        </article>
      </header>
    </Layout>
  );
};

export default Page;