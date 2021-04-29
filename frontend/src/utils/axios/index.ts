import axios from "axios";

const resolvedServer = (() => {
  if(process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  return "http://localhost:8080";
})();

export const Axios = axios.create({
  baseURL: resolvedServer,
  timeout: 10000
})