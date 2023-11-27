import axios from "axios";
import { errorMessages } from "./errorMessages";

const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}/api/v1`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// TODO: extract the axios setup and interceptors

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const errorCode = error.response.data.error;

      const errorMessage = errorMessages[errorCode];
      console.log("errorMessage:", errorMessage);
      if (errorMessage) {
        // TODO: Localization
        const language = "en";
        error.response.data.error = errorMessage[language];
      }
    }
    return Promise.reject(error);
  }
);

export default api;
