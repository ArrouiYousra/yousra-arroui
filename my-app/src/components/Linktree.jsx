import React from 'react';
import './Linktree.css';

const Linktree = () => {
  return (
    <section id="linktree" className="linktree-section">
      <div className="linktree-container">
        <div className="linktree-content">
          <h2 className="linktree-title">
            Cliquer ici
            <svg className="linktree-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </h2>
          <a 
            href="https://lnk.bio/yousraarroui" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linktree-link"
          >
            <img 
              src={process.env.PUBLIC_URL + '/assets/icons/frame.png'} 
              alt="QR Code Linktree" 
              className="linktree-qr"
            />
            <span className="linktree-text">Tous mes liens</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Linktree;

