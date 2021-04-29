import axios from "axios";

const resolvedServer = (() => {
  if(process.env.NODE_ENV === 'production') {
    // return process.env.API_URL;
    return "https://noted-hangout-310606.an.r.appspot.com"
  }
  return "http://localhost:8080";
})();

export const Axios = axios.create({
  baseURL: resolvedServer,
  timeout: 5000
})