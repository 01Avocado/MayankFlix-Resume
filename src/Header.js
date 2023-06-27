import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Header" onClick={handleToggle}>
      <h2>About Me</h2>
      
        <div>
          <p>
            Experienced in Ruby on Rails and JavaScript-based programming plus a background in sales. Possess strong skills in communication, collaboration, and adaptation that help tech companies understand the wants and needs of their users and how to maximize their experiences.
          </p>
          <hr className="separator" />
        </div>
      
    </div>
  );
};

export default Header;
