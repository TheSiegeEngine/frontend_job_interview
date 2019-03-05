import React from 'react';
import { Link } from 'react-router-dom';

let header = {
    display: 'inline-block',
    margin: '.8em 1em',
    fontSize: '1.5rem',
    color: '#E1E0E9',
    fontStyle: 'italic',
    textDecoration: 'none'
}

let navbar = {
    backgroundColor: '#1E1959',
}

let Header = () => (
    <div style={navbar}>
        <Link style={header} to={'/'}>PyFlight</Link>
    </div>
)


export default Header