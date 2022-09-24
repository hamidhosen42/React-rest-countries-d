import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
                  <h1>Welcome to my React Website</h1>
                  <nav className='header'>
                    <a href="/home">H O M E</a>
                    <a href="/shop">S H O P</a>
                    <a href="/about">A B O U T Us</a>
                  </nav>
        </div>
    );
};

export default Header;