import React from 'react';

const Achievements = () => {
    return (
        <div className='container achievementsContainer' id='achievements'>
            <div className='sectionHeadline'>
                <h1>Achievements</h1>
            </div>
            <section className='xCulture'>
                <div className='title eduTitle'>
                    <h2>X-Culture Award</h2>
                    <h3>2019 Certificate of Global Collaboration &amp; Best Team Award </h3>
                </div>
                <div className='summary'>
                    <p>
                        The X-culture Global Collaboration course involved theoretical training and two months of practical experience as a member of a global virtual team. Raudel and his team developed a high-quality business plan for a multinational company, BeeUp, working alongside over 5,000 students from 130 universities in over 40 countries on 6 continents.
                    </p>
                </div>
            </section>
            <section className='csa'>
                <div className='title csaTitle'>
                    <h2>Commuter Student Association (CSA)</h2>
                    <h3>2019 Rebrand Competition Winner</h3>
                </div>
                <div className='summary'>
                    <p>
                        Entered into the CSA's Rebranding competition at Dominican University. Raudel was able to develop the award-winning logo by collaborating with commuters to better understand what their days look like.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Achievements;