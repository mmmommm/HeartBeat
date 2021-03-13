import React from "react";
import styles from "../styles/pages/Request.module.scss";
import { Layout } from "../components/Layout";

const Request: React.FC = () => {
  const sendRequest = () => {

  }
  return (
    <>
      <Layout>
        <div className={styles.header}>
          <header>If you have an article request, please send it here.</header>
        </div>
        <div className={styles.container}>
          <form action="http://localhosta:8080/v1/request" method="POST">
            <div className={styles.wrapper}>
              <label htmlFor="name">Your name</label><br/>
              <input type="text" id="name" placeholder="Please enter your name" required/><br/>
              <label htmlFor="request_music">artist/song name</label><br/>
              <input type="text" id="request_music" placeholder="Please enter request artist or song" required/><br/>
              <button type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Request;
