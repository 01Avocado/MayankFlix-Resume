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
        A co-founder and highly driven AI/ML developer with a strong foundation in building production-ready mobile
        applications. My expertise spans the full product lifecycle, from conceiving and developing a personalized AI engine
        for a mobile app to optimizing and fine-tuning AI models for real-world applications. My experience demonstrates a
        unique blend of technical, data management, and collaborative skills, honed through my work as a co-founder and by
        leading teams to deliver high-impact products.
      </p>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;
