import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">About Me</span>
      </h2>
      <div className="container">
        <p className="lead">
        An Electronics and Telecommunication undergraduate with honors in Deep Learning and hands-on experience in AI,
        ML, and data science. Certified in Generative AI (Academy Accreditation), Data Science (Cisco), and practical
        simulation project by BCG X. Proficient in Python, SQL, and data analytics, with practical exposure through academic
        projects and automation tools. Actively seeking a data science internship to apply analytical expertise, grow in
        real-world settings, and contribute to impactful, data-driven decisions.Experienced in Ruby on Rails and JavaScript-based 
        programming plus a background in sales. Possess strong skills in communication, collaboration, and adaptation that help tech 
        companies understand the wants and needs of their users and how to maximize their experiences.
        </p>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;
