import React from "react";
import styles from "../styles/pages/Language.module.scss";
import { Layout } from "../components/Layout";

const Language: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.languages}>
          <button>
            Japanese
          </button>
          <button>
            English
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Language;
