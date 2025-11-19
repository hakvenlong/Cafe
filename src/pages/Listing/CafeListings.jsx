import React, { useState, useEffect } from "react";

const cafes = [
  {
    id: 1,
    name: "Sunrise Coffee",
    location: "Phnom Penh",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800",
  },
  {
    id: 2,
    name: "Urban Brew",
    location: "Siem Reap",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
  },
  {
    id: 3,
    name: "Leaf & Latte",
    location: "Battambang",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800",
  },
  {
    id: 4,
    name: "Urban Brew",
    location: "Siem Reap",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
  },
  {
    id: 5,
    name: "Leaf & Latte",
    location: "Battambang",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800",
  },
  {
    id: 6,
    name: "Urban Brew",
    location: "Siem Reap",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
  },
  {
    id: 7,
    name: "Leaf & Latte",
    location: "Battambang",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800",
  },
];

const CafeListings = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-5 placeholder-glow">
      <h2 className="mb-4 fw-bold">
        <span className={!loaded ? 'placeholder shadow-sm' : ''}>
          Cafe Listings
        </span>
      </h2>

      <div className="row g-4">
        {cafes.map((cafe) => (
          <div className="col-md-4" key={cafe.id}>
            <div className="card shadow-sm border-0 rounded-3">

              {!loaded && (
                <div
                  className="card-img-top bg-light"
                  style={{
                    height: "220px",
                    borderRadius: "6px",
                    textShadow: "2px 2px",
                  }}
                />
              )}

              {loaded && (
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover", borderRadius: "6px" , textShadow: "2px 2px"}}
                />
              )}

              <div className="card-body">
                <h5 className="card-title">
                  <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                    {cafe.name}
                  </span>
                </h5>
                <p className="text-muted">
                  <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                    Location:
                  </span>
                  <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                    {cafe.location}
                  </span>
                </p>
                <button className={`${!loaded ? 'placeholder shadow-sm' : ''} btn btn-dark w-100`}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CafeListings;
