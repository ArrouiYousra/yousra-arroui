import React, { useEffect, useCallback } from 'react';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';
import './Sidebar.css';

const Navigation = ({ isSidebarOpen, onToggleSidebar }) => {
  const closeSidebar = useCallback(() => {
    onToggleSidebar();
  }, [onToggleSidebar]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const hamburgerBtn = document.querySelector('.hamburger-btn');
      
      if (isSidebarOpen && 
          sidebar && 
          !sidebar.contains(event.target) && 
          hamburgerBtn && 
          !hamburgerBtn.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <SidebarNav onClose={closeSidebar} />
      <SidebarFooter />
    </aside>
  );
};

export default Navigation;