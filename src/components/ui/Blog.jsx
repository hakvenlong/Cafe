import React, { useState, useEffect } from 'react';
import blogImage from '../../assets/images/blog.png';

const Blog = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="container-fluid ">
        <div className="row align-items-center placeholder-glow">

          {/* Image Side */}
          <div className="col-lg-6 p-5">
            {!loaded ? (
              <div className="placeholder shadow-sm w-100" style={{ height: "550px", borderRadius: "10px" }}></div>
            ) : (
              <img
                src={blogImage}
                className="w-100"
                style={{ height: "550px", objectFit: "cover", borderRadius: "10px" }}
                alt="Cafe blog post"
              />
            )}
          </div>



          {/* Content Side */}
          <div className="col-lg-6">
            <div className="h-100 p-5 p-md-6 bg-coffee-cream text-coffee-brown">
              <div className="small text-uppercase fw-bold text-coffee mb-3 tracking-wider">
                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                  Cafe Stories
                </span>
              </div>

              <h3 className="display-5 fw-bold mb-4">
                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                  A Family Tradition of Rich, Aromatic Coffee.
                </span>
              </h3>

              <p className="lead mb-4">
                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                  Coffee has the power to connect generations – whether it's learning grandma's brewing techniques and trying to perfect them just like her or the intense memories triggered by the rich flavors and aromas of our favorite coffee blends.
                </span>
              </p>

              <div className="mb-4">
                <small className="text-muted">
                  <i className="bi bi-calendar me-2"></i>
                  <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                    November 15, 2025
                  </span>
                </small>
                <span className="mx-3 text-muted">•</span>
                <small className="text-muted">
                  <i className="bi bi-clock me-2"></i>
                  <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                    4 min read
                  </span>
                </small>
              </div>

              <button className="btn ">
                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                  Read the Story
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;