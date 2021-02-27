import React from "react";
import styles from "../styles/pages/index.module.scss";
import { Layout } from "../components/Layout";

const Index: React.FC = () => {
  return (
    <>
      <Layout>
        <p className={styles.font}>トップページ</p>
      </Layout>
    </>
  );
};
export default Index;