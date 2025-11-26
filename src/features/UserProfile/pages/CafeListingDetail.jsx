import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCafeListing } from "../hooks/useCafeListing";
import { usePlaceholder } from "../../../hooks/usePlaceholder";
import { ArrowLeft, MapPin, Clock, Phone, Coffee } from "lucide-react";

const ListingDetail = () => {
  const { id } = useParams();
  const cafeListing = useCafeListing();
  const loaded = usePlaceholder(); 

  const cafe = cafeListing.find((c) => String(c.id) === String(id));

  if (!loaded) {
    return (
      <div className="min-vh-100" style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)" }}>
        <div className="container py-5 py-lg-7">
          {/* Back Button Skeleton */}
          <div className="d-inline-flex align-items-center gap-3 mb-4">
            <div className="placeholder rounded-pill col-4" style={{ height: "44px" }}></div>
          </div>

          <div className="row g-5">
            {/* Image Skeleton */}
            <div className="col-lg-7">
              <div
                className="rounded-4 placeholder-glow"
                style={{
                  height: "520px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="w-100 h-100 placeholder rounded-4"></div>
                <div className="position-absolute top-0 start-0 m-4">
                  <div className="placeholder rounded-pill col-5" style={{ height: "40px" }}></div>
                </div>
              </div>
            </div>

            {/* Details Card Skeleton */}
            <div className="col-lg-5">
              <div
                className="h-100 p-5 rounded-4"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="placeholder-glow">
                  <div className="placeholder col-10 mb-4" style={{ height: "48px" }}></div>

                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="d-flex gap-3 mb-4">
                      <div className="placeholder col-1 rounded-circle" style={{ width: "44px", height: "44px" }}></div>
                      <div className="flex-grow-1">
                        <div className="placeholder col-4 mb-2" style={{ height: "20px" }}></div>
                        <div className="placeholder col-8" style={{ height: "28px" }}></div>
                      </div>
                    </div>
                  ))}

                  <hr className="my-5" />

                  <div className="placeholder col-6 mb-3" style={{ height: "32px" }}></div>
                  <div className="placeholder col-12 mb-2" style={{ height: "20px" }}></div> 
                  <div className="placeholder col-11 mb-2" style={{ height: "20px" }}></div>
                  <div className="placeholder col-9" style={{ height: "20px" }}></div>

                  <div className="mt-5">
                    <div className="placeholder col-5 mb-4" style={{ height: "32px" }}></div>
                    <div className="row g-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="col-4">
                          <div className="placeholder rounded-pill w-100" style={{ height: "44px" }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Final Rendered Content (unchanged — beautiful as before)
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

        <div className="row g-5 align-items-start">
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
              <img
                src={cafe.image}
                alt={cafe.name}
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.8s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />

              <div className="position-absolute top-0 start-0 m-4">
                <span className="badge bg-white text-primary px-4 py-2 rounded-pill shadow-lg fw-semibold">
                  <Coffee size={16} className="me-1" />
                  Popular Spot
                </span>
              </div>
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
                <div className="row g-3">
                  {cafe.specialties.map((item, index) => (
                    <div key={index} className="col-6 col-md-4">
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