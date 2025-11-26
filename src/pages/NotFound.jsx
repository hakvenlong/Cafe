import React from "react";
import { Link } from "react-router-dom";
import { FaRegFaceFrown } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center p-4" style={{ height: "80vh" }}>
      <FaRegFaceFrown size={150} className="text-warning mb-3" />
      <h1 className="display-3 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or got moved.
      </p>

      <Link to="/" className="btn btn-danger px-4">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
