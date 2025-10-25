import React from 'react';
import './SidebarNav.css';

const SidebarNav = ({ onClose }) => {
  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#education', label: 'Éducation' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Expérience' },
    { href: '#cv', label: 'Mon CV' },
    { href: '#contact', label: 'Me contacter' }
  ];

  return (
    <div className="sidebar-nav">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <div className="nav-item-wrapper">
              <a 
                href={item.href} 
                className="nav-link" 
                onClick={onClose}
              >
                {item.label}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
