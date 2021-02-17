import React from  'react';
import thumbnail from './assets/tally-ai.jpg';

const Foodiefun = props => {
    return (
        <section className='projectContent tallyAi' style={{display: props.proj != 'tally' ? 'none' : ''}}>
                <div className='projImg'>
                    <a href='https://www.tally-ai.com/' target='_blank'>
                        <img src={thumbnail} alt='Snapshot of the Tally A.I. website' style={{maxWidth: 400}}/>
                    </a>
                </div>
                <h2>Tally Ai</h2>
                <p>On this project, I teamed up with a team of UX, Data Science, and Web students to improve upon a web application that provides useful data to small businesses looking to improve and/or expand their business. One of the features I worked to implement was Google OAuth so that we can offer users a seamless way to register and sign-in to our application. At the same time, the back-end endpoints were created to create new google users in our database and send relevant data (e.g. user ID) to the Data Science Back end. As a team, we also worked to improve the overall file structure, cleaned up code, and refactored the redux to enhance maintainability and legibility for future developers.</p>
                <div className='redirectBtn'>
                    <a href='https://github.com/raudelf/tally-ai-fe' target='_blank'>
                        <button>Github FE Repo</button>
                    </a>
                    <a href='https://github.com/raudelf/tally-ai-be' target='_blank'>
                        <button>Github BE Repo</button>
                    </a>
                    <a href='https://www.tally-ai.com/' target='_blank'>
                        <button>Live Website</button>
                    </a>
                </div>
        </section>
    );
};

export default Foodiefun;