import React from "react";
import styles from "../styles/pages/Search.module.scss";
import { Layout } from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.search}>
          <form action="">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="検索" />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Search;
