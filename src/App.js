import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Main from './components/Main';
import Education from './components/Education';

function App() {
  return (
    <div className="webContainer">
      <Navigation />
      <Main />
      <Education />
    </div>
  );
}

export default App;
