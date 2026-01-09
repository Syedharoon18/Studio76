import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  // ✅ If already logged in, redirect to gallery
  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (isAdmin === "true") {
      navigate("/gallery", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ TEMP AUTH (replace with backend later)
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/gallery", { replace: true });
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1>Admin Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
