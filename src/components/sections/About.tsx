import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-content">
        <h2 id="about-heading">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Your digital journey starts here. We create meaningful experiences in the digital world.</p>
            <p>Our team of experts combines creativity with technical expertise to deliver exceptional results.</p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 