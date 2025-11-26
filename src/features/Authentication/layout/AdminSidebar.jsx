// src/features/Authentication/layout/AdminSidebar.jsx
import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaShoppingCart, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <h2>CafeShop</h2>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/admin" end><FaHome /> Dashboard</NavLink></li>
          <li><NavLink to="/admin/products"><FaBox /> Products</NavLink></li>
          <li><NavLink to="/admin/orders"><FaShoppingCart /> Orders</NavLink></li>
          <li><NavLink to="/admin/reservations"><FaCalendarAlt /> Reservations</NavLink></li>
          <li><NavLink to="/admin/settings"><FaCog /> Settings</NavLink></li>
        </ul>
      </nav>
      <div className="sidebar-logout">
        <button><FaSignOutAlt /> Logout</button>
      </div>
    </aside>
  );
};

export default AdminSidebar;