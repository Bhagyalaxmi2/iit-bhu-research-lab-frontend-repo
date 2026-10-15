

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginAdmin } from "../services/authApi";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = await loginAdmin({ username, password });

      // Step 3: Save authentication data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Step 4: Notify Navbar immediately after login
      window.dispatchEvent(new Event("auth-change"));

      // Step 5: Navigate to Admin Dashboard
      navigate("/admin/dashboard");

    } catch (error) {
      setError(error.response?.data?.message || error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">

        {/* Header */}
        <div className="login-header">
          <h1>Admin Login</h1>
          <p>IIT BHU Research Lab</p>
        </div>

        {/* Error */}
        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="login-form" onSubmit={handleLogin}>

          {/* Username */}
          <div className="login-field">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password */}
          <div className="login-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </main>
  );
}

export default Login;
