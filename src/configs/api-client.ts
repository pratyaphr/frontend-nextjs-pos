import Axios from "axios";

const baseUrl = "http://localhost:5555/api";

export const api = Axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    lang: "th",
  },
});

api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("token");

    if (access_token && config.headers.Authorization !== null) {
      config.headers.Authorization = access_token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
