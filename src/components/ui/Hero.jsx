import React, { useState, useEffect } from 'react';
import { usePlaceholder } from '../../hooks/usePlaceholder';
import image from '../../assets/images/Hero.jpg'

const Hero = () => {
  const loaded = usePlaceholder();

  const style = {
    backgroundImage: loaded ? `url(${image})` : 'linear-gradient(90deg, #e0e0e0, #f0f0f0)',
    height: '80vh',
    borderRadius: '20px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '40px',
    position: 'relative',
    transition: 'background-image 0.5s ease-in-out',
  };

  const heroText = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
  };

  return (
    <section>
      <div className="p-5 text-center bg-image" style={style}>
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white" style={heroText}>
              <h1 className="mb-3">
                <span className={!loaded ? 'placeholder shadow-sm' : ''}>
                  Bringing Art to everything
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
