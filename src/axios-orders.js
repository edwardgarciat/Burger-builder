import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-de9e9.firebaseio.com",
});

export default instance;
