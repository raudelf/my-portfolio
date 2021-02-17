import React from "react";
import RF from "./projects/assets/2019Logo.png";

const Homepage = () => {
  return (
    <div className="container" id="main">
      <div className="mainContainer">
        <div className="logo">
          <img className="logoPNG" src={RF} alt="Logo of Raudel Flores" />
        </div>
        <header className="headline">
          <div className="title mainTitle">
            <h1>Raudel Flores</h1>
            <h3>Full-Stack Engineer</h3>
          </div>
          <div className="summary">
            <p>
              {/* With a background in graphic design and his love for computers,
              Raudel is eager to transition into a software engineer role. His
              interest in code first started in high-school, but it was
              difficult to find an affordable university with a good web
              development program at the time. He was, however, able to pursue
              graphic design at Dominican University with the financial aid he
              received. Now, with the help of Lambda School and his design
              skills, Raudel works to develop functional and clean-looking apps
              for end-users. */}
              A graphic designer planning to transition into an engineer role. For the past 18 months, I have been studying at Lambda School to develop my skills as a full-stack engineer. Lambda School is an online bootcamp that offers full-time and part-time programs in full-stack web development and computer science. With a full-time job as a graphic designer, I was able to apply to their part-time program to start my journey towards becoming an engineer. Aside from school and work, I really enjoy going on hikes, biking, running, weight lifting, and spending time with family and friends. 
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Homepage;
