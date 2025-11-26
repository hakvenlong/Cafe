// src/components/Navbar/Header.jsx  (or wherever your Header is)
import { useState, useEffect } from "react";
import {
  IoSearchOutline,
  IoClose,
} from "react-icons/io5";
import { GrCafeteria } from "react-icons/gr";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdFavoriteBorder, MdMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";

function Header() {
  const { totalUniqueItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // Fixed: Added missing state

  const handleClose = () => setShowMobileMenu(false);
  const handleShow = () => setShowMobileMenu(true);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header className="header position-sticky top-0 z-header bg-white shadow-sm">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between">

            {/* Logo */}
            <Link to="/" className="logo d-flex align-items-center text-decoration-none z-logo">
              <GrCafeteria className="logo-icon" />
              <span className="logo-text">CafeShop</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav d-none d-lg-flex justify-content-center">
              <ul className="nav gap-5 align-items-center">
                <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
                <li><NavLink to="/listings" className="nav-link">Listings</NavLink></li>
                <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>

                <li>
                  <NavDropdown title="Pages" id="pages-dropdown" className="pages-dropdown">
                    <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/faqs">FAQs</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/testimonial">Testimonial</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/reservation">Reservation</NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="actions d-flex align-items-center gap-4">

              {/* Search Button */}
              <button
                className="search-btn d-none d-sm-flex align-items-center justify-content-center"
                onClick={() => setShowSearch(true)}
                aria-label="Open search"
              >
                <IoSearchOutline size={22} />
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="icon-link position-relative d-none d-md-block">
                <MdFavoriteBorder size={26} />
                {totalWishlistItems > 0 && <span className="badge">{totalWishlistItems}</span>}
              </Link>

              {/* Cart */}
              <Link to="/checkout" className="icon-link position-relative">
                <RiShoppingCartLine size={26} />
                {totalUniqueItems > 0 && <span className="badge">{totalUniqueItems}</span>}
              </Link>

              {/* Login */}
              <Link to="/login" className="login-btn d-none d-md-inline-block">
                Login
              </Link>

              {/* Mobile Menu Toggle */}
              <button className="mobile-toggle d-lg-none" onClick={handleShow}>
                <MdMenu size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay (Optional – Simple & Beautiful) */}
      {/* {showSearch && (
        <div className="search-overlay">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search coffee, cake, latte..."
              autoFocus
              className="search-input"
            />
            <button onClick={() => setShowSearch(false)} className="close-search">
              <IoClose size={28} />
            </button>
          </div>
        </div>
      )} */}

      {showSearch && (
        alert("comimg soon")
      )}

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showMobileMenu}
        onHide={handleClose}
        placement="end"
        className="mobile-menu z-offcanvas"
        backdropClassName="z-offcanvas-backdrop"
      >
        <Offcanvas.Header closeButton className="border-bottom pb-3">
          <Offcanvas.Title className="d-flex align-items-center gap-2 fw-bold">
            <GrCafeteria size={28} />
            CafeShop
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-4">
          <ul className="mobile-nav">
            <li><NavLink to="/" end onClick={handleClose}>Home</NavLink></li>
            <li><NavLink to="/listings" onClick={handleClose}>Listings</NavLink></li>
            <li><NavLink to="/products" onClick={handleClose}>Products</NavLink></li>
            <li><NavLink to="/contact" onClick={handleClose}>Contact</NavLink></li>

            <li className="mobile-submenu-title">Pages</li>
            {["/about", "/faqs", "/privacy-policy", "/testimonial", "/reservation"].map((path) => {
              const labels = {
                "/about": "About Us",
                "/faqs": "FAQs",
                "/privacy-policy": "Privacy Policy",
                "/testimonial": "Testimonial",
                "/reservation": "Reservation",
              };
              return (
                <li key={path}>
                  <Link to={path} onClick={handleClose}>{labels[path]}</Link>
                </li>
              );
            })}

            <li className="mobile-actions mt-5">
              <div className="d-flex align-items-center justify-content-between mb-4 gap-4">
                <Link to="/wishlist" onClick={handleClose} className="d-flex align-items-center gap-3">
                  <div className="position-relative">
                    <MdFavoriteBorder size={26} />
                    {totalWishlistItems > 0 && <span className="badge">{totalWishlistItems}</span>}
                  </div>
                  <span>Wishlist</span>
                </Link>

                <Link to="/checkout" onClick={handleClose} className="d-flex align-items-center gap-3">
                  <div className="position-relative">
                    <RiShoppingCartLine size={26} />
                    {totalUniqueItems > 0 && <span className="badge">{totalUniqueItems}</span>}
                  </div>
                  <span>Cart</span>
                </Link>
              </div>

              <Link to="/login" onClick={handleClose} className="login-btn-mobile w-100 text-center">
                Login
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;