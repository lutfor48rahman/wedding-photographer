import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div >
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
};

export default Header;