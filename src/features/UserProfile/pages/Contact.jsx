import React, { useRef, useState, useEffect } from 'react';
import { IoLogoGoogle, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import { usePlaceholder } from '../../../hooks/usePlaceholder';
import '../css/contact.css'

const Contact = () => {

  const SERVICE_ID = "service_iql4pgv";
  const TEMPLATE_ID = "template_2i57xde";
  const PUBLIC_KEY = "e2uILIjttPqFgj8Nh";

  const loaded = usePlaceholder();

  const form = useRef();
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;

    // Trigger HTML5 validation
    setValidated(true);
    if (!formEl.checkValidity()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    toast.loading('Sending message...', {
      duration: 3000
    });


    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formEl)
      .then(
        (result) => {
          // console.log('EmailJS SUCCESS:', result.status, result.text);
          toast.success('Thank you! Your message has been sent successfully.');
          formEl.reset();
          setValidated(false);
        },
        (error) => {
          // console.error('EmailJS ERROR:', error);
          const errMsg = error.text || error.message || 'Unknown error';
          const errCode = error.status ? ` (${error.status})` : '';
          toast.error(`Failed to send: ${errMsg}${errCode}. Please try again.`);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section py-5 placeholder-glow">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-8">
            <h2 className="contact-title mb-3 display-4 fw-bold">
              <span className={!loaded ? "placeholder-sm" : ""}>
                Contact Us
              </span>
            </h2>
            <p className="contact-subtitle text-secondary lead">
              We'd love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="map-container rounded overflow-hidden shadow-lg">
              <iframe                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31270.033689552136!2d104.87694716180302!3d11.569469766270549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951725d8c4835%3A0x2047e2df9364f385!2sToul%20Kork%20District%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1764214162058!5m2!1sen!2skh"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SMOS Store Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Form + Info */}
        <div className="row justify-content-center">
          {/* Contact Form */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="contact-form-card p-4 p-md-5 rounded shadow-lg">
              <form
                ref={form}
                onSubmit={sendEmail}
                noValidate
                className={`needs-validation ${validated ? 'was-validated' : ''}`}
              >
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Your Name"
                    required
                    minLength="2"
                  />
                  <div className="invalid-feedback">
                    Please enter your name (at least 2 characters).
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-medium">Email address</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label fw-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control form-control-lg"
                    id="subject"
                    placeholder="How can we help?"
                    required
                    minLength="3"
                  />
                  <div className="invalid-feedback">
                    Please enter a subject (at least 3 characters).
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-medium">Message</label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message here..."
                    required
                    minLength="10"
                  ></textarea>
                  <div className="invalid-feedback">
                    Message must be at least 10 characters.
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary px-5 fw-semibold submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {/* Status Alert */}
                {status && (
                  <div
                    className={`alert mt-4 ${status.includes('Thank') || status.includes('success')
                      ? 'alert-success'
                      : 'alert-danger'
                      }`}
                    role="alert"
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className="contact-info p-4 p-md-5 rounded shadow-lg">
              <h5 className="fw-bold mb-4 info-title">Contact Information</h5>
              <ul className="list-unstyled mb-5">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt-fill me-3 icon"></i>
                  <p className="mb-0">
                    Warm coffee, cozy moments, your daily escape
                  </p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill me-3 icon"></i>
                  <p className="mb-0">Phone Number +855 123 456 789</p>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill me-3 icon"></i>
                  <p className="mb-0">Email : shop@cafesne.com</p>
                </li>
              </ul>
                
              <h5 className="fw-bold mb-4 info-title">Follow Us</h5>
              <div className="d-flex gap-4 social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <IoLogoFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <IoLogoInstagram />
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
                  <IoLogoGoogle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;