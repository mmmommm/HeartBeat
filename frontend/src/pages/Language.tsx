import React from "react";
import styles from "../styles/pages/Language.module.scss";

const Language: React.FC = () => {
  return (
    <div className={styles.languages}>
      <button>
        Japanese
      </button>
      <button>
        English
      </button>
    </div>
  );
};

export default Language;
