import React from 'react';

const HeroSection = ({ onGetStartedClick, onLearnMoreClick }) => {
  return (
    <div className="hero-container">
      <p className="hero-intro-text">Discover Your True Colors</p>
      <h1 className="hero-app-name">Aurithm</h1>
      <p className="hero-subtitle">
        Our AI will analyze your unique features to reveal the color palette that makes you shine.
      </p>
      <div className="hero-actions">
        <button className="hero-button learn-more" onClick={onLearnMoreClick}>
          Learn More <span className="arrow">&rarr;</span>
        </button>
        <button onClick={onGetStartedClick} className="hero-button get-started">
          Get Started <span className="arrow">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
