import React from 'react';
import './Linktree.css';

const Linktree = () => {
  return (
    <section id="linktree" className="linktree-section">
      <div className="linktree-container">
        <div className="linktree-header">
          <h2 className="linktree-title">Retrouvez-moi sur tous mes réseaux</h2>
        </div>
        
        <div className="linktree-content">
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

