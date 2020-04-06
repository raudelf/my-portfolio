import React from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Main from './components/Main';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="webContainer">
      <Navigation />
      <Main />
      <Projects />
      <Education />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
