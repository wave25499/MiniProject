import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Anime Page</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
        </ul>
    )
}

export default SignInLinks