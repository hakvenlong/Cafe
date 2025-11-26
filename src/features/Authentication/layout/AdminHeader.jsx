// src/features/Authentication/layout/AdminHeader.jsx
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="header-left">
        {/* Optional: Search bar */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search orders, products..." />
        </div>
      </div>

      <div className="header-right">
        {/* Notifications */}
        <div className="notification-wrapper">
          <button className="notification-btn">
            <FaBell size={22} />
            <span className="notification-badge">5</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <FaUserCircle size={40} className="profile-avatar" />
          <div className="profile-info">
            <p className="profile-name">Admin</p>
            <small className="profile-role">Cafe Manager</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;