import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={process.env.PUBLIC_URL + '/yousra-photo.jpg'} 
                alt="Yousra Arroui" 
                className="professional-photo"
              />
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">Call me Yousra.</span>
            </h1>
            
            <p className="hero-catchphrase">
              Welcome to my Portfolio
            </p>
            
            <div className="hero-description">
              <p>Computer science student</p>
              <p>Software Developer for fun</p>
              <p>Always leveling up my skills</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
