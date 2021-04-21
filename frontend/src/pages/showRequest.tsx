import React from "react";
import styles from "../styles/pages/index.module.scss";
import axios from "axios";
import { Requests } from "../types";

const showRequest: React.VFC = () => {
  const [requests, setRequests] = React.useState<Requests>([]);
  React.useEffect(() => {
    axios.get(`${process.env.server}/v1/requests`)
      .then((res) => {
        const data = res.data
        setRequests(data)
      })
  }, []);
  return (
          <div>
            <div className={styles.index}>
              {requests.map((request, i) => {
                return (
                  <div key={i}>
                    <p>{request.name}</p>
                    <p>{request.artist}</p>
                    <p>{request.song}</p>
                    <p>{request.content}</p>
                  </div>
                )
              })}
            </div>
          </div>
  );
};
export default showRequest;
