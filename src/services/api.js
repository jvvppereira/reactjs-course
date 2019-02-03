import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejs-course-api.herokuapp.com/"
});

export default api;