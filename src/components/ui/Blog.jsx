import React from 'react';
import { usePlaceholder } from '../../hooks/usePlaceholder';
import blogImage from '../../assets/images/blog.png';
import wave from '../../assets/waves.svg'

const Blog = () => {
  const loaded = usePlaceholder();

  return (
    <>
      <img src={wave} alt="" style={{
        transform: 'rotate(180deg)',
        transformOrigin: 'center',
        display: 'block',
        width: "100%",
      }} />
      <section style={{ backgroundColor: '#caf0f8' }} className="m-0">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between min-vh-100 py-5 py-lg-0">

            {/* Image Side */}
            <div className="col-lg-6 p-5">
              {!loaded ? (
                <div
                  className="placeholder shadow-sm w-100 rounded-3"
                  style={{ height: "60vh" }}
                  aria-hidden="true"
                >
                  <div className="placeholder-glow w-100 h-100 rounded-3"></div>
                </div>
              ) : (
                <img
                  src={blogImage}
                  className="w-100 rounded-3 shadow-sm"
                  style={{ height: "60vh", objectFit: "cover" }}
                  alt="Cafe blog post"
                />
              )}
            </div>

            {/* Content Side — Perfectly Centered */}
            <div className="col-lg-6 p-5 d-flex align-items-center justify-content-center">
              <div className="p-5 p-md-6 bg-coffee-cream text-coffee-brown rounded-3" style={{ maxWidth: '600px' }}>

                <div className={`small text-uppercase fw-bold text-coffee mb-3 ${!loaded ? 'placeholder-glow' : ''}`}>
                  <span className={!loaded ? 'placeholder col-5' : ''}>Cafe Stories</span>
                </div>

                <h1 className={`display-5 fw-bold mb-4 ${!loaded ? 'placeholder-glow' : ''}`}>
                  <span className={!loaded ? 'placeholder col-11' : ''}>
                    A Family Tradition of Rich, Aromatic Coffee.
                  </span>
                </h1>

                <p className={`lead mb-4 ${!loaded ? 'placeholder-glow' : ''}`}>
                  <span className={!loaded ? 'placeholder col-12' : ''}></span>
                  <span className={!loaded ? 'placeholder col-11' : ''}></span>
                  <span className={!loaded ? 'placeholder col-10' : ''}></span>
                  {!loaded ? null : (
                    <>Coffee has the power to connect generations – whether it's learning grandma's brewing techniques and trying to perfect them just like her or the intense memories triggered by the rich flavors and aromas of our favorite coffee blends.</>
                  )}
                </p>

                <div className="mb-4 d-flex gap-3 flex-wrap">
                  <small className="text-muted d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <span className={!loaded ? 'placeholder col-6' : ''}>November 15, 2025</span>
                  </small>
                  <span className="text-muted">•</span>
                  <small className="text-muted d-flex align-items-center">
                    <i className="bi bi-clock me-2"></i>
                    <span className={!loaded ? 'placeholder col-4' : ''}>4 min read</span>
                  </small>
                </div>

                <button className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill">
                  {loaded ? 'Read the Story →' : <span className="placeholder col-7"></span>}
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <img src={wave} alt="" 
      style={{
        transformOrigin: 'center',
        display: 'block',
        width: "100%" }} />

    </>
  );
};

export default Blog;