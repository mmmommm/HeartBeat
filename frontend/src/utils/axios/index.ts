import axios from "axios";

const resolvedServer = (() => {
  if(process.env.server) {
    return process.env.server;
  }
  return "http://localhost:8080";
})();

export const Axios = axios.create({
  baseURL: resolvedServer,
  timeout: 5000
})