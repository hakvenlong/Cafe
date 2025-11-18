import { IoSearchOutline } from "react-icons/io5";
import { GrCafeteria } from "react-icons/gr";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 text-bg">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">

          {/* Logo */}
          <a href="#" className="me-3 fs-4 text-black">
            <GrCafeteria />
          </a>

          {/* Navigation */}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 m-auto">
            <li><Link to="/" className="nav-link px-2 text-black">Home</Link></li>
            <li><Link to="/features" className="nav-link px-2 text-black">Features</Link></li>
            <li><Link to="/pricing" className="nav-link px-2 text-black">Pricing</Link></li>
            <li><Link to="/faqs" className="nav-link px-2 text-black">FAQs</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-black">About</Link></li>
          </ul>


          {/* Right Side Buttons */}
          <div className="text-end d-flex align-items-center gap-2">
            {/* Search button stays normal */}
            <button type="button" className="btn btn-outline-warning">
              <IoSearchOutline size={20} />
            </button>

            {/* Login button as Link */}
            <Link to="/login" className="btn btn-outline-warning">
              Login
            </Link>

            {/* Sign-up button as Link */}
            <Link to="/signup" className="btn btn-warning">
              Sign-up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
