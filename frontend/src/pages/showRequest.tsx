import React from "react";
import styles from "../styles/pages/index.module.scss";
import axios from "axios";
import { Requests } from "../types";

const showRequest: React.FC = () => {
  const [requests, setRequests] = React.useState<Requests>([]);
  React.useEffect(() => {
    axios.get('http://localhost:8080/v1/request')
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
