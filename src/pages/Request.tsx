import React from "react";
import styles from "../styles/pages/Request.module.scss";
import { Layout } from "../components/Layout";

const Request: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <form action="">
            <label htmlFor="name">あなたの名前</label><br/>
            <input type="text" id="name" placeholder="名前を入力してください" required/><br/>
            <label htmlFor="requestmusic">アーティスト名/楽曲名</label><br/>
            <input type="text" id="requestmusic" placeholder="アーティスト名もしくは楽曲名を入力してください" /><br/>
            <button>
              送信
            </button>
          </form>　
        </div>
      </Layout>
    </>
  );
};

export default Request;
