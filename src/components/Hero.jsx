import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ScaryFlix</h1><br /><br />
          {/* <h4 className="hero-title">Are Youlooking for Immersive Movies!?</h4> */}
          <p className="hero-subtitle">
            Dive into a world of chills and thrills. Watch the most terrifying and exciting horror movies!
          </p><br />
          <div className="action-buttons">
    <button className="action-button primary">Browse Movies</button>
    <button className="action-button secondary">Watch Trailer</button>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
