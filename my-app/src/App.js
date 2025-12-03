import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Navigation isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
            <div className="main-content">
              <Hero />
              <About />
              <Education />
              <Certifications />
              <Skills />
              <Projects />
              <Experience />
              <Activities />
              <Contact />
            </div>
            <Footer />
    </div>
  );
}

export default App;