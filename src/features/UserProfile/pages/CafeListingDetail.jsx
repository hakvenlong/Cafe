import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCafeListing } from "../hooks/useCafeListing";
import { usePlaceholder } from "../../../hooks/usePlaceholder";
import { ArrowLeft, MapPin, Clock, Phone, Coffee } from "lucide-react";
import LoadingSpinner from '../components/Loading/LoadingSpinner'

const ListingDetail = () => {
  const { id } = useParams();
  const cafeListing = useCafeListing();
  const loaded = usePlaceholder();

  const cafe = cafeListing.find((c) => String(c.id) === String(id)); // eslint-disable-line

  if (!loaded) { return (<LoadingSpinner />); }
  if (!cafe) return <p style={{ padding: 40 }}>Cafe not found.</p>;

  return (
    <div className="min-vh-100" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)" }}>
      <div className="container py-5 py-lg-7">
        <Link
          to="/listings"
          className="d-inline-flex align-items-center gap-2 text-dark mb-4 fw-medium rounded-pill px-4 py-2 bg-white shadow-sm hover-shadow transition-all"
          style={{ textDecoration: "none" }}
        >
          <ArrowLeft size={20} />
          Back to Cafes
        </Link>

        <div className="row g-3 align-items-start">
          <div className="col-lg-7">
            <div
              className="position-relative rounded-4 overflow-hidden shadow-2xl"
              style={{
                height: "520px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <picture>
                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={cafe.image}/>
                <source media="(min-width: 1025px)" srcSet={cafe.image} />
                <source media="(min-width: 465px)" srcSet={cafe.image} />

                <img
                  src={cafe.image}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                />
              </picture>

              <div className="position-absolute top-0  m-5">
                <span className="d-flex text-decoration-underline">
                  <Coffee size={22} className="align-self-center me-1 text-primary mt-1 flex-shrink-0" />
                  Popular Spot
                </span>
              </div>
            </div>
            <div className="mt-3 mb-4">
              <iframe
                className="rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015144.042843711!2d102.35141036946915!3d12.132114492261149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1764298706002!5m2!1sen!2skh"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SMOS Store Location"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="h-100 p-5 rounded-4 shadow-xl"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <h1 className="display-5 fw-bold mb-3 text-dark">{cafe.name}</h1>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <MapPin size={22} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">Location</strong>
                    <p className="mb-0 text-muted fs-5">{cafe.location}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <Clock size={22} className="text-success mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">Opening Hours</strong>
                    <p className="mb-0 text-muted fs-5">{cafe.openingHours}</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <Phone size={22} className="text-info mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-dark">Contact</strong>
                    <p className="mb-0 text-muted fs-5">{cafe.contact}</p>
                  </div>
                </div>
              </div>

              <hr className="my-5 border-secondary-subtle" />

              <div>
                <h4 className="fw-bold mb-3">Description</h4>
                <p className="lead text-muted">{cafe.description}</p>
              </div>

              <div className="mt-5">
                <h4 className="fw-bold mb-4">Our Specialties</h4>
                <div className="row d-flex flex-wrap g-3">
                  {cafe.specialties.map((item, index) => (
                    <div key={index} className="col-6 col-md-4 w-auto">
                      <span
                        className="d-inline-block px-4 py-3 rounded-pill bg-primary bg-opacity-10 text-primary fw-medium shadow-sm"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;