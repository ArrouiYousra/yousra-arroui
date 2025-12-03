import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src={process.env.PUBLIC_URL + '/assets/photos/accueil.jpeg'} 
              alt="Accueil" 
              className="hero-image"
            />
          </div>
          <p className="hero-text">Passionné d'informatique, recherche alternance pour contribuer à vos projets innovants</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;