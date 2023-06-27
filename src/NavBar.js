import React from 'react';
import './NavBar.css'


const Navbar = () => {
  
  
    return (
      <div className="navbar">
        <div className="navbar__tools">
        <img 
        className="navbar-image"
        src={process.env.PUBLIC_URL + '/Nickflix.png'}/>
          <a
            href="https://www.linkedin.com/in/nicholas-fears/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nfears57"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Github
          </a>
          <a
            href="https://medium.com/@nfears5798"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            Medium
          </a>
        </div>
        <div className="navbar__tools">
          <p className="navbar__info">New York, NY | 914-588-2532 | nfears5798@gmail.com</p>
        </div>
      </div>
    );
  };

export default Navbar;
