import React, {useState} from "react";

// Projects
import FoodieFun from "./projects/Foodiefun";
import SpotifySS from "./projects/SpotifySS";
import TallyAi from "./projects/TallyAi";

const Projects = () => {
  const [proj, setProj] = useState('foodie')

  return (
    <div className="container projectsContainer" id="projects">
      <section className="sectionHeadline">
        <h1>Projects</h1>
      </section>
      <section className="splitHalf">
        <div className="projectLinks">
          <button className='projectBtn' onClick={() => {
            setProj('foodie')
          }}>Foodie Fun</button>
          <button className='projectBtn' onClick={() => {
            setProj('spotify')
          }}>Spotify Song Suggester</button>
          <button className='projectBtn' onClick={() => {
            setProj('tally')
          }}>Tally Ai</button>
        </div>
        <div className='projectRoutes'>
          <FoodieFun proj={proj}/>
          <SpotifySS proj={proj}/>
          <TallyAi proj={proj} />
        </div>
      </section>
    </div>
  );
};

export default Projects;
