import React from 'react';
import './SidebarNav.css';

const SidebarNav = ({ onClose }) => {
  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#linktree', label: 'Linktree' },
    { href: '#education', label: 'Éducation' },
    { href: '#experience', label: 'Expériences professionnelles' },
    { href: '#projects', label: 'Projets' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Compétences' },
    { href: '#activities', label: 'Centres d\'intérêt' },
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
