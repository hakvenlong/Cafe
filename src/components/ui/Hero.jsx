// Hero.jsx
import React, { useState, useEffect } from 'react';
import image from '../../assets/images/Hero.jpg';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
    // Optional: handle error
    img.onerror = () => setLoaded(true); // fallback to gradient if image fails
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        width: '100%',
        height: '100vh',
        margin: 0,
        borderRadius: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background Image with Smooth Fade */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: loaded
            ? `url(${image})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: loaded ? 1 : 0.9,
          transition: 'opacity 1.2s ease-in-out',
          filter: loaded ? 'none' : 'blur(8px)',
        }}
      />

      {/* Optional Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
        }}
      />

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0 5vw 8vh',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div className="text-white">
          <h1
            className={`display-4 fw-bold mb-4 ${!loaded ? 'placeholder-glow' : ''}`}
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
            }}
          >
            {loaded ? (
              'Bringing Art to Everything'
            ) : (
              <>
                <span className="placeholder col-8 rounded" style={{ height: '1.2em' }}></span>
                <br />
                <span className="placeholder col-6 rounded mt-3" style={{ height: '1.2em' }}></span>
              </>
            )}
          </h1>

          <p
            className={`lead ${!loaded ? 'placeholder-glow' : ''}`}
            style={{ fontSize: '1.5rem', textShadow: '1px 1px 8px rgba(0,0,0,0.8)' }}
          >
            {loaded ? (
              'Handcrafted designs that inspire and elevate your space.'
            ) : (
              <span className="placeholder col-7 rounded" style={{ height: '1.6em' }}></span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;