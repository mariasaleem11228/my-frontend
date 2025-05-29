import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // replace with your backend URL
});

export const getUsers = () => API.get("/users");

export const loginUser = (email, password) => {
  const params = new URLSearchParams();
  params.append("email", email);
  params.append("password", password);

  return API.post("/auth/login", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};