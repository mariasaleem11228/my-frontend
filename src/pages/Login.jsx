import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/apis"; // import the function

const Login = () => {
  const [email, setEmail] = useState("mariasaleem@example.com");
  const [password, setPassword] = useState("newpass456");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(email, password);

      // Save token or session (assuming token in response)
      const token = response.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/"); // redirect to home
      } else {
        setError("Login successful, but no token received.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
