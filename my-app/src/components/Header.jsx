import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/yousra-arroui/ARROUI Yousra.pdf.pdf';
    link.download = 'ARROUI_Yousra_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-name" onClick={scrollToTop} style={{ cursor: 'pointer' }}>Yousra</h1>
          <button 
            className="hamburger-btn"
            onClick={onToggleSidebar}
            aria-label="Ouvrir le menu"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className={`sidebar-icon ${isSidebarOpen ? 'sidebar-icon-open' : ''}`}
            >
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="9" y1="4" x2="9" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="header-right">
          <button 
            className="cv-download-btn"
            onClick={handleDownloadCV}
            aria-label="Télécharger mon CV"
            title="CV"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
