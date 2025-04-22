import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-content">
        <h1>Welcome to Errantry.xyz</h1>
        <p>Exploring the digital landscape with purpose and creativity</p>
        <a href="#about" className="cta-button" aria-label="Learn more about us">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero; 