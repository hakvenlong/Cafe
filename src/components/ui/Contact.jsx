import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoFacebook
} from "react-icons/io5";
import {
  IoLocationOutline,
  IoCallSharp,
  IoMailOutline
} from "react-icons/io5";

import { usePlaceholder } from '../../hooks/usePlaceholder';

const Contact = () => {
  const loaded = usePlaceholder();
  const image = 'https://wallpapers.com/images/hd/cafe-background-8cfto5lu1pyga5vm.jpg';

  return (
    <section>
      <div className="container">
        <div className="align-items-center g-5" style={{ minHeight: "80vh" }}>

          {/* Title */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-coffee-brown animate-on-enter">
              {loaded ? 'Contact Us' : <span className="placeholder col-6 rounded" style={{ height: '60px' }} />}
            </h2>
          </div>

          <div className="d-flex flex-wrap m-auto justify-content-center">
            {/* Image Side */}
            <div className="col-lg-6 order-lg-2">
              <div className="animate-on-enter" data-aos-delay="200">
                {!loaded ? (
                  <div
                    className="placeholder-glow rounded-4 shadow-lg"
                    style={{ width: '100%', height: '500px' }}
                  >
                    <div className="placeholder w-100 h-100 rounded-4"></div>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt="Cafe interior - Contact us"
                    className="img-fluid rounded-4 shadow-lg object-fit-cover w-100"
                    style={{ height: '500px' }}
                    loading="lazy"
                  />
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="col-lg-6 order-lg-1">
              <div className="p-4 p-md-5">

                {/* Address */}
                <div className="mb-5 animate-on-enter" data-aos-delay="100">
                  <p className="fw-bold fs-5 d-flex align-items-center gap-3 mb-3 text-coffee-brown">
                    <IoLocationOutline size={34} />
                    <span>Our Location</span>
                  </p>
                  <ul className="list-unstyled ms-5 text-muted fs-6">
                    <li className="mb-2">Cambodia , Toul Tork</li>
                    <li className="mb-2">W Speed</li>
                    <li>123 Main Street, Cityville, Countryland</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="mb-5 animate-on-enter" data-aos-delay="200">
                  <p className="fw-bold fs-5 d-flex align-items-center gap-3 mb-3 text-coffee-brown">
                    <IoCallSharp size={34} />
                    <span>Get in Touch</span>
                  </p>
                  <ul className="list-unstyled ms-5 text-muted fs-6">
                    <li className="mb-3 d-flex align-items-center gap-3">
                      <IoMailOutline size={22} />
                      <span>shop@cafesne.com</span>
                    </li>
                    <li className="d-flex align-items-center gap-3">
                      <IoCallSharp size={22} />
                      <span>+885 123 456 789</span>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="animate-on-enter" data-aos-delay="300">
                  <p className="fw-bold fs-5 d-flex align-items-center gap-3 mb-4 text-coffee-brown">
                    <span>Follow Us</span>
                  </p>
                  <div className="d-flex gap-4 ms-5">
                    <a
                      href="#"
                      className="text-coffee-brown hover-lift"
                      aria-label="GitHub"
                    >
                      <IoLogoGithub size={42} />
                    </a>
                    <a
                      href="#"
                      className="text-coffee-brown hover-lift"
                      aria-label="Instagram"
                    >
                      <IoLogoInstagram size={42} />
                    </a>
                    <a
                      href="#"
                      className="text-coffee-brown hover-lift"
                      aria-label="Facebook"
                    >
                      <IoLogoFacebook size={42} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;