// src/features/Authentication/pages/AdminSettings.jsx
import { useState } from "react";
import { FaSave, FaStore, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaPalette, FaBell, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const AdminSettings = () => {
  const [cafeName, setCafeName] = useState("CafeShop");
  const [tagline, setTagline] = useState("Warm Coffee, Cozy Moments");
  const [openingTime, setOpeningTime] = useState("07:00");
  const [closingTime, setClosingTime] = useState("21:00");
  const [address, setAddress] = useState("123 Coffee Street, Phnom Penh");
  const [phone, setPhone] = useState("+855 96 123 4567");
  const [email, setEmail] = useState("hello@cafeshop.com");
  const [website, setWebsite] = useState("www.cafeshop.com");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Settings saved successfully!", {
      icon: "Saved",
      style: { background: "#d45a3e", color: "white" }
    });
  };

  return (
    <div className="admin-settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your cafe's appearance and operations</p>
      </div>

      <form onSubmit={handleSave} className="settings-grid">
        {/* Cafe Info */}
        <div className="settings-card">
          <div className="card-header">
            <FaStore className="card-icon" />
            <h3>Cafe Information</h3>
          </div>
          <div className="form-group">
            <label>Cafe Name</label>
            <input
              type="text"
              value={cafeName}
              onChange={(e) => setCafeName(e.target.value)}
              placeholder="Your cafe name"
            />
          </div>
          <div className="form-group">
            <label>Tagline</label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="A short tagline for your cafe"
            />
          </div>
        </div>

        {/* Operating Hours */}
        <div className="settings-card">
          <div className="card-header">
            <FaClock className="card-icon" />
            <h3>Operating Hours</h3>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Opening Time</label>
              <input
                type="time"
                value={openingTime}
                onChange={(e) => setOpeningTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Closing Time</label>
              <input
                type="time"
                value={closingTime}
                onChange={(e) => setClosingTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="settings-card">
          <div className="card-header">
            <FaMapMarkerAlt className="card-icon" />
            <h3>Contact & Location</h3>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="settings-card">
          <div className="card-header">
            <FaPalette className="card-icon" />
            <h3>Preferences</h3>
          </div>
          <div className="toggle-group">
            <label className="toggle-label">
              <span>Push Notifications</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="toggle-group">
            <label className="toggle-label">
              <span>Dark Mode (Coming Soon)</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                disabled
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="settings-actions">
          <button type="submit" className="btn-save">
            <FaSave className="me-2" />
            Save All Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;