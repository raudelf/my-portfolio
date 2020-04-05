import React from 'react';

const Skills = () => {
    return (
        <div className='container skillsContainer' id='skills'>
            <section className='sectionHeadline'>
                <h1>Skills</h1>
            </section>
            <section className='devSkills'>
                <h3>Developer Skills</h3>
                <ol className='listSkills'>
                    <li>HTML</li>
                    <li>CSS &amp; LESS</li>
                    <li>Vanilla Javascript</li>
                    <li>React / JSX</li>
                    <li>Redux</li>
                    <li>Responsive Design</li>
                    <li>Github / Bash Terminal</li>
                    <li>Visual Studio Code</li>
                </ol>
            </section>
            <section className='personalSkills'>
                <h3>Personal Skills</h3>
                <ol className='listSkills'>
                    <li>Fluent in Spanish</li>
                    <li>Team Work</li>
                    <li>Self-Motivated</li>
                    <li>Time Management</li>
                    <li>Positive Attitude</li>
                    <li>Attention to Detail</li>
                    <li>Communication</li>
                </ol>
            </section>
            <section className='adobeSkills'>
                <h3>Adobe Skills</h3>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Illustrator</li>
                <li>Animate</li>
                <li>XD</li>
                <li>Premiere</li>
            </section>
        </div>
    )
}

export default Skills;