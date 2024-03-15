import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='favr8'>
            <button> <Link to="/favorites">Favorites</Link></button>
        </div>
    );
}

export default Navbar;
