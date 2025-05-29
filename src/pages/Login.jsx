import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/apis";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("mariasaleem@example.com");
  const [password, setPassword] = useState("newpass456");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        onLogin(); // ✅ update state in App
        navigate("/");
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      setError("Login failed.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
