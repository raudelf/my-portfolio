import React from  'react';
import thumbnail from './assets/foodie-fun.jpg';

const Foodiefun = props => {
    return (
        <section className='projectContent foodieFun' style={{display: props.proj != 'foodie' ? 'none' : ''}}>
                <div className='projImg'>
                    <a href='https://raudelf.github.io/Marketing-Page/' target='_blank'>
                        <img src={thumbnail} alt='Snapshot of the Foodie Fun website' style={{maxWidth: 400}}/>
                    </a>
                </div>
                <h2>FoodieFun</h2>
                <p>For this project I teamed up with a UX designer to create a landing page for an application that allows users to record their experiences at restaurants. The app also allowed user to share these experiences with their future selves and others. For the most part, the page is made up of HTML and CSS / LESS while following brand guidelines established by the UX designer. The page also includes a responsive design for a good user experience on both mobile and desktop users.</p>
                <div className='redirectBtn'>
                    <a href='https://github.com/raudelf/Marketing-Page' target='_blank'>
                        <button>Github Repo</button>
                    </a>
                    <a href='https://raudelf.github.io/Marketing-Page/' target='_blank'>
                        <button>Live Website</button>
                    </a>
                </div>
        </section>
    );
};

export default Foodiefun;