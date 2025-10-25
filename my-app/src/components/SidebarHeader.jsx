import React from 'react';
import './SidebarHeader.css';

const SidebarHeader = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header-left">
        <button 
          className="hamburger-btn"
          onClick={onToggleSidebar}
          aria-label="Fermer le menu"
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
        <h1 className="sidebar-header-name">Yousra</h1>
      </div>
    </div>
  );
};

export default SidebarHeader;
