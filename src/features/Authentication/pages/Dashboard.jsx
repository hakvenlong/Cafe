// src/features/Authentication/pages/Dashboard.jsx
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import { 
  FaBoxOpen, FaShoppingCart, FaUsers, FaChartLine, 
  FaCalendarAlt, FaDollarSign, FaClock, FaStar, FaCoffee 
} from "react-icons/fa";
import '../css/dashboard.css'

const Dashboard = () => {
  const loaded = usePlaceholder(1000);

  const stats = [
    { label: "Total Orders", value: "248", icon: FaShoppingCart, change: "+12%" },
    { label: "Revenue Today", value: "$1,284", icon: FaDollarSign, change: "+8.5%" },
    { label: "Active Customers", value: "89", icon: FaUsers, change: "+23%" },
    { label: "Pending Reservations", value: "12", icon: FaCalendarAlt, change: "+3" },
  ];

  // Simple SVG-based mini charts (no Recharts!)
  const salesData = [420, 580, 490, 720, 980, 1200, 1100];
  const topProducts = [
    { name: "Iced Latte", sold: 89, revenue: "$356" },
    { name: "Croissant", sold: 72, revenue: "$288" },
    { name: "Cappuccino", sold: 65, revenue: "$260" },
    { name: "Matcha Latte", sold: 58, revenue: "$232" },
  ];

  const recentOrders = [
    { id: "#1001", customer: "Sopheak", items: 3, total: "$24.50", status: "Completed" },
    { id: "#1002", customer: "Chantha", items: 2, total: "$18.00", status: "Preparing" },
    { id: "#1003", customer: "David Kim", items: 5, total: "$42.80", status: "Delivered" },
    { id: "#1004", customer: "Ratanak", items: 1, total: "$8.50", status: "Pending" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          <FaCoffee className="me-2" /> CafeShop Dashboard
        </h1>
        <p className="text-muted">Welcome back! Here's your cafe performance today</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">
              <stat.icon size={32} />
            </div>
            <div className="stat-info">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">
                {loaded ? stat.value : <span className="placeholder col-6"></span>}
              </h3>
              <small className="text-success fw-bold">{stat.change}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Trend + Top Products */}
      <div className="grid-2">
        {/* Sales Trend (SVG Sparkline) */}
        <div className="chart-card">
          <h3>Weekly Sales Trend</h3>
          {loaded ? (
            <div className="sparkline">
              <svg viewBox="0 0 300 100" className="sparkline-svg">
                <polyline
                  fill="none"
                  stroke="#d45a3e"
                  strokeWidth="4"
                  points={salesData.map((v, i) => `${i * 50},${100 - (v / 13)}`).join(' ')}
                />
                <polyline
                  fill="rgba(212,90,62,0.1)"
                  points={`0,100 ${salesData.map((v, i) => `${i * 50},${100 - (v / 13)}`).join(' ')} 300,100`}
                />
              </svg>
              <div className="sparkline-labels">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          ) : (
            <div className="skeleton-chart"></div>
          )}
        </div>

        {/* Top Products */}
        <div className="top-products-card">
          <h3>Top Selling Items</h3>
          <div className="top-list">
            {loaded ? topProducts.map((p, i) => (
              <div key={i} className="top-item">
                <div className="rank">#{i + 1}</div>
                <div className="flex-grow-1">
                  <p className="item-name">{p.name}</p>
                  <small className="text-muted">{p.sold} sold</small>
                </div>
                <strong className="text-cafe">{p.revenue}</strong>
              </div>
            )) : (
              [...Array(4)].map((_, i) => (
                <div key={i} className="top-item">
                  <div className="placeholder rounded-circle" style={{width: 40, height: 40}}></div>
                  <div className="flex-grow-1 ms-3">
                    <div className="placeholder col-8 mb-2"></div>
                    <div className="placeholder col-5"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="recent-orders-card">
        <h3>Recent Orders</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loaded ? recentOrders.map(order => (
                <tr key={order.id}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.items}</td>
                  <td className="text-cafe fw-bold">{order.total}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              )) : (
                [...Array(4)].map((_, i) => (
                  <tr key={i}>
                    <td><div className="placeholder col-6"></div></td>
                    <td><div className="placeholder col-8"></div></td>
                    <td><div className="placeholder col-3"></div></td>
                    <td><div className="placeholder col-5"></div></td>
                    <td><div className="placeholder rounded-pill" style={{width: 80, height: 28}}></div></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;