import React from 'react';
import './NavBar.css'


const Navbar = () => {
  
  
    return (
      <div className="navbar">
        <div className="navbar__tools">
        <img 
        className="navbar-image"
        src={process.env.PUBLIC_URL + '/Nickflix.png'}
        alt="Netflix Logo"
        />
          <a
            href="https://www.linkedin.com/in/mayank-gangrediwar-5a9041228/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/01Avocado"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Github
          </a>
          <a
            href="https://medium.com/@mayankgangrediwar"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Medium
          </a>
        </div>
        <div className="navbar__tools">
          <p className="navbar__info">Pune, Maharashtra | +91 7276379674| mayankgangrediwar@gmail.com</p>
        </div>
      </div>
    );
  };

export default Navbar;
