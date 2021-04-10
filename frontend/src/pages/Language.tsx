import Link from "next/link";
import React from "react";
import styles from "../styles/pages/Language.module.scss";

const Language: React.FC = () => {
  return (
    <div className={styles.languages}>
      <div>
        <Link href="/Language" locale="ja">
          Japanese
        </Link>
      </div>
      <div>
        <Link href="/Language" locale="en-US">
          English
        </Link>
      </div>
    </div>
  );
};

export default Language;
