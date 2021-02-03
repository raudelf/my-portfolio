import React from "react";
import "./App.css";

// Components
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="webContainer">
      <Navigation />
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
