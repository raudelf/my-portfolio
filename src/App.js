import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Main from './components/Main';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="webContainer">
      <Navigation />
      <Main />
      <Education />
      <Skills />
      <Achievements />
    </div>
  );
}

export default App;
