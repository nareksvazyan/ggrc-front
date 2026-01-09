import axios from "axios";


const instance = axios.create({
  baseURL: "https://ggrc-backend.onrender.com/api" , //55555
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;