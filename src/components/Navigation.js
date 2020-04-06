import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
    return(
        <div className='navContainer'>
            <nav className='nav'>
                <Link
                activeClass='active'
                to='main'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Main</Link>

                <Link
                activeClass='active'
                to='projects'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Projects</Link>

                <Link
                activeClass='active'
                to='education'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Education</Link>

                <Link
                activeClass='active'
                to='skills'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Skills</Link>

                <Link
                activeClass='active'
                to='achievements'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Achievements</Link>

                <Link
                activeClass='active'
                to='contact'
                spy= {true}
                smooth= {true}
                offset= {-60}
                duration= {500}>Contact</Link>
            </nav>
        </div>
    )
};

export default Navigation;