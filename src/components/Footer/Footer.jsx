import { IoLogoGoogle, IoLogoGithub, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrCafeteria } from "react-icons/gr";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cafe-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Left: Logo + Copyright */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo m-auto">
                <GrCafeteria size={36} />
                <span>CafeShop</span>
              </Link>
              <p className="footer-tagline">
                Warm coffee, cozy moments, your daily escape
              </p>
              <p className="footer-copyright">
                © {currentYear} CafeShop. All rights reserved.
              </p>
            </div>

            {/* Center: Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Our Menu</Link></li>
                <li><Link to="/reservation">Reserve Table</Link></li>
                <li><Link to="/testimonial">Testimonials</Link></li>
              </ul>
            </div>

            {/* Right: Contact & Social */}
            <div className="footer-contact">

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <IoLogoInstagram />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <IoLogoFacebook />
                  </a>
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
                    <IoLogoGoogle />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <IoLogoGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p>Made with love and caffeine — Your daily grind</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;