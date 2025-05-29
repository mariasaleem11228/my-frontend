import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // replace with your backend URL
});

export const getUsers = () => API.get("/users");

export const loginUser = (email, password) => {
  return API.get("/auth/login", {
    params: { email, password },
  });
};
