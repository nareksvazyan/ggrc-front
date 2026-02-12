import axios from "axios";


const instance = axios.create({
  baseURL: "https://ggrc-backend-hr0d.onrender.com" , //55555
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
