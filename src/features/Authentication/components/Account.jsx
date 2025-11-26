import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import {useEffect} from "react";


const Account = () => {
  const { user, logout } = useAuth();
  const { emptyCart } = useCart();
  const navigate = useNavigate();
  const { emptyWishlist  } = useWishlist();

  const handleLogout = () => {
    emptyCart();
    logout();
    emptyWishlist();
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}>

      <div className="card p-4 shadow" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">Account</h3>

        <div className="mb-3">
          <strong>Name:</strong> {user?.name}
        </div>
        <div className="mb-3">
          <strong>Email:</strong> {user?.email}
        </div>
        <div className="mb-3">
          <strong>Password:</strong> {user?.password}
        </div>

        <button
          className="btn btn-danger w-100 mt-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
