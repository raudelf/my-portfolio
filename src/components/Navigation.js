import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className='navContainer'>
            <nav className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    )
};

export default Navigation;