import React from 'react';

const Education = () => {
    return (
        <div className='container educationContainer' id='education'>
            <div className='sectionHeadline'>
                <h1>Education</h1>
            </div>
            <div className='schools'>
                <section className='lambdaEDU'>
                    <div className='title eduTitle'>
                        <h2>Lambda School</h2>
                        <h3>2019-2020</h3>
                    </div>
                    <ol className='summary'>
                        <li><strong>Expected Certification:</strong> Dec 2020</li>
                        <li><strong>Focus:</strong> Software Engineer</li>
                    </ol>
                </section>
                <section className='domEDU'>
                    <div className='title eduTitle'>
                        <h2>Dominican University</h2>
                        <h3>2015-2019</h3>
                    </div>
                    <ol className='summary'>
                        <li>Bachelor in Fine Arts</li>
                        <li><strong>Major:</strong> Graphic Design</li>
                        <li><strong>Minor:</strong> Marketing</li>
                        <li><strong>GPA:</strong> 3.5/4.0</li>
                    </ol>
                </section>
            </div>
        </div>
    )
}

export default Education;