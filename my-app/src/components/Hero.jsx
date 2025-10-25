import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-video-container">
            <img 
              src={process.env.PUBLIC_URL + '/23d25f92483d3ece840f54c65a524b0b.gif'} 
              className="hero-video"
              alt="Hero animation"
              onError={(e) => {
                console.error('Erreur de chargement de l\'image:', e);
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;