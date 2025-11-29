// src/features/Authentication/pages/AdminLogin.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaCoffee } from "react-icons/fa";
import toast from "react-hot-toast";
import "../css/adminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple admin check (for demo – replace with real auth later if needed)
    if (email === "admin@cafeshop.com" && password === "admin123") {
      // Save admin login
      localStorage.setItem("cafeUser", JSON.stringify({
        email: "admin@cafeshop.com",
        name: "Admin",
        role: "admin"
      }));
      toast.success("Welcome back, Admin! ☕", {
        icon: "👋",
        style: { background: "#d45a3e", color: "white" }
      });
      navigate("/admin");
    } else {
      toast.error("Wrong email or password. Try: admin@cafeshop.com / admin123");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <FaCoffee size={48} />
            </div>
            <h1>Admin Login</h1>
            <p>Welcome back! Please login to manage CafeShop</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Login to Dashboard
            </button>
          </form>

          <div className="login-footer">
            <p className="hint">
              <strong>Demo Credentials:</strong><br />
              Email: admin@cafeshop.com<br />
              Password: admin123
            </p>
            <Link to="/" className="back-link">
              ← Back to CafeShop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;