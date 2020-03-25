import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Homepage from './components/Homepage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="webContainer">
      <Navigation />
      <Route exact path='/' component={Homepage}/>
    </div>
  );
}

export default App;
