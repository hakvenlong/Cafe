import { useState, useEffect } from "react";
import "./style.css";

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="mosaic-loader">
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>
        <div className="mosaic-item"></div>

        <div className="loading-text">
          <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;