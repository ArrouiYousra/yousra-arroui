import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + '/assets/projects/Digital.jpeg'} 
              alt="Accueil" 
              className="hero-image"
            />
          </div>
          <p className="hero-text">Bienvenue dans mon portfolio</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;