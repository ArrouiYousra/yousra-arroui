import React from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="back-to-top-container">
      <div className="back-to-top-right">
        <button 
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Retour en haut de la page"
          title="Retour en haut"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BackToTop;
