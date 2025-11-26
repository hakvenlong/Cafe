import React from "react";
import { usePlaceholder } from "../../../hooks/usePlaceholder";
import { useCafeListing } from "../hooks/useCafeListing";
import { Link } from "react-router-dom";

const CafeListing = () => {
  const cafeListing = useCafeListing();
  const loaded = usePlaceholder();

  return (
    <div className="container py-5">
      <h2 className="mb-5 fw-bold display-5 text-center">
        <span className={!loaded ? "placeholder placeholder-lg col-4 rounded" : ""}>
          {loaded ? "Discover Amazing Cafes" : ""}
        </span>
      </h2>

      <div className="row g-4 g-lg-5 justify-content-center">
        {cafeListing.map((cafe) => (
          <div className="col-md-6 col-lg-4" key={cafe.id}>
            <Link
              to={`/listing-details/${cafe.id}`}
              className="text-decoration-none"
            >
              <div
                className="position-relative overflow-hidden rounded-4 shadow-lg border border-white border-opacity-20"
                style={{
                  background: loaded
                    ? "rgba(255, 255, 255, 0.15)"
                    : "#fafafa",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "all 0.4s ease",
                  height: "380px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-12px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* Image with Placeholder */}
                {!loaded ? (
                  <div
                    className="placeholder bg-light"
                    style={{
                      height: "100%",
                      borderRadius: "16px",
                    }}
                  />
                ) : (
                  <img
                    src={cafe.image}
                    alt={cafe.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                )}

                {/* Dark Gradient Overlay + Info */}
                <div
                  className="position-absolute bottom-0 start-0 end-0 p-4 text-white"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
                    borderRadius: "0 16px 16px 16px 16px",
                  }}
                >
                  <h3 className="h4 fw-bold mb-1">
                    {loaded ? cafe.name : <span className="placeholder col-8" />}
                  </h3>
                  <p className="mb-0 opacity-90 d-flex align-items-center gap-2">
                    {loaded ? (
                      <>
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A7 7 0 0 0 2 6c0-4.314 6-10 6-10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        {cafe.location}
                      </>
                    ) : (
                      <span className="placeholder col-6" />
                    )}
                  </p>
                </div>

                {/* Optional: Subtle "Open" badge on hover */}
                <div
                  className="position-absolute top-0 end-0 m-3 opacity-0 transition-opacity duration-300"
                  style={{ transition: "opacity 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <span className="badge bg-white text-dark px-3 py-2 rounded-pill shadow-sm">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeListing;