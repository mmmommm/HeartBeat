import React from "react";
import styles from "../styles/pages/Request.module.scss";
import axios from "axios";

const Request: React.VFC = () => {
  const [request, setRequest] = React.useState({
    name: "",
    artist: "",
    song: "",
    content: "",
  })
  const updateName = (ev) => setRequest({
    ...request,
    name: ev.target.value
  })
  const updateArtist = (ev) => setRequest({
    ...request,
    artist: ev.target.value
  })
  const updateSong = (ev) => setRequest({
    ...request,
    song: ev.target.value
  })
  const updateContent = (ev) => setRequest({
    ...request,
    content: ev.target.value
  })
  const sendRequest = () => {
    axios.post(`${process.env.server}/v1/request`, {
      name: request.name,
      artist: request.artist,
      song: request.song,
      content: request.content,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className={styles.header}>
        <header>If you have an article request, please send it here.</header>
      </div>
      <div className={styles.container}>
        <form action="/" onSubmit={sendRequest}>
          <div className={styles.wrapper}>
            <label htmlFor="name">Your name</label><br/>
            <input type="text" id="name" value={request.name} placeholder="Please enter your name" onChange={updateName} required/><br/>
            <label htmlFor="request_artist">Artist name</label><br/>
            <input type="text" id="request_artist" value={request.artist} placeholder="Please enter request artist name" onChange={updateArtist} required/><br/>
            <label htmlFor="request_song">Song title</label><br/>
            <input type="text" id="request_song" value={request.song} placeholder="Please enter request song title" onChange={updateSong} /><br/>
            <label htmlFor="opinion">Opinion</label><br/><br/>
            <textarea id="opinion" value={request.content} placeholder="If you have any opinion please enter it" cols={50} rows={7} onChange={updateContent} /><br/>
            <button type="submit">
              send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Request;
