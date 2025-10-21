import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
