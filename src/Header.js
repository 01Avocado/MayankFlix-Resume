import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h2 className="h1">
        <span className="accent-underline">About Me</span>
      </h2>
      <div className="container">
        <p className="lead">
        AI/ML developer and co-developer of Wriddles, an AI-powered gamified learning application. Experienced in building production-ready systems, automating microservices, 
        and fine-tuning ML models. Skilled in transforming raw data into actionable insights through advanced analytics, visualization, and experimentation. Recognized for 
        strong problem-solving, adaptability, and collaboration, delivering scalable solutions that drive innovation and product growth.
      </p>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;
