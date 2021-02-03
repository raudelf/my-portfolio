import React from "react";
import { NavLink, Route } from "react-router-dom";

// Projects
import FoodieFun from "./projects/Foodiefun";

const Projects = () => {
  return (
    <div className="container projectsContainer" id="projects">
      <section className="sectionHeadline">
        <h1>Projects</h1>
      </section>
      <section className="splitHalf">
        <div className="projectLinks">
          <NavLink
            className="projectBtn"
            activeClassName="activeProject"
            to="/foodie-fun"
          >
            Foodie fun
          </NavLink>
          <NavLink
            className="projectBtn"
            activeClassName="activeProject"
            to="/spotify-song-suggester"
          >
            Spotify Song Suggester
          </NavLink>
          <NavLink
            className="projectBtn"
            activeClassName="activeProject"
            to="/tally-ai"
          >
            Tally Ai
          </NavLink>
        </div>
        <div className="projectRoutes">
          <Route exact path="/foodie-fun" component={FoodieFun} />
          <Route path="/spotify-song-suggester" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
