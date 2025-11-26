// src/features/Authentication/layout/AdminLayout.jsx
import { Outlet } from "react-router-dom";  
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import "./admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="admin-main">
        {/* Top Header */}
        <AdminHeader />

        {/* Page Content - This is where child routes render */}
        <div className="admin-content">
          <Outlet />   {/* Now works perfectly! */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;