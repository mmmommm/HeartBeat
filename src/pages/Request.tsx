import React from "react";
import styles from "../styles/pages/Request.module.scss";
import { Layout } from "../components/Layout";

const Request: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <form action="">
            <div className={styles.wrapper}>
              <label htmlFor="name">あなたの名前</label><br/>
              <input type="text" id="name" placeholder="名前を入力してください" required/><br/>
              <label htmlFor="request_music">アーティスト名/楽曲名</label><br/>
              <input type="text" id="request_music" placeholder="アーティスト名もしくは楽曲名を入力してください" /><br/>
              <button type="submit">
                送信
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Request;
