import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Linktree from './components/Linktree';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Hero />
        <About />
        <Linktree />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Activities />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;