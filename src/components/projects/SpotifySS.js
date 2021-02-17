import React from  'react';
import thumbnail from './assets/spotify-ss.jpg';

const Foodiefun = props => {
    return (
        <section className='projectContent foodieFun' style={{display: props.proj != 'spotify' ? 'none' : ''}}>
                <div className='projImg'>
                    <a href='https://bw-spotify-song-suggester-2.github.io/Marketing-page/' target='_blank'>
                        <img src={thumbnail} alt='Snapshot of the Spotify Song Suggester website' style={{maxWidth: 400}}/>
                    </a>
                </div>
                <h2>Spotify Song Suggester</h2>
                <p>A project where I got the opportunity to collaborate with a team of Data Science and Web students to develop a web application that recommends music to Spotify users based on their playlists. As part of the web team, I lead the planning and delivery of the front-end for the application. My team and I also implemented Redux to handle the state management of the application. Improved application privacy/security by incorporating a token authentication system for new and returning users.</p>
                <div className='redirectBtn'>
                    <a href='https://github.com/bw-spotify-song-suggester-2/React-Front-End' target='_blank'>
                        <button>Github Repo</button>
                    </a>
                    <a href='https://bw-spotify-song-suggester-2.github.io/Marketing-page/' target='_blank'>
                        <button>Live Website</button>
                    </a>
                </div>
        </section>
    );
};

export default Foodiefun;