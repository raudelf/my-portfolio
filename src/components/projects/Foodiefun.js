import React from  'react';
import thumbnail from './assets/foodie-fun.jpg';

const Foodiefun = () => {
    return (
        <section className='foodieFun'>
                <div className='projImg'>
                    <a href='https://raudelf.github.io/Marketing-Page/' target='_blank'>
                        <img src={thumbnail} alt='Snapshot of a website I worked on' style={{maxWidth: 400}}/>
                    </a>
                </div>
                <h2>FoodieFun</h2>
                <p>A marketing landing page built in collaboration with a UX Designer. This was one of Raudel's first collaboration projects with a full dev team. The landing page was for an app that food enthusiasts can use to save their favorite dishes from local restaurants.</p>
        </section>
    );
};

export default Foodiefun;