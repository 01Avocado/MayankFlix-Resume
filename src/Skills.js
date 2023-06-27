import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'React.js',
    'Ruby on Rails',
    'SQL',
    'JavaScript',
    'Git',
    'Python',
    'CSS3',
    'HTML',
    'Bootstrap',
    'Postman'
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Top 10 Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-box">
              <span className="skill-name">{skill}</span>
              <span className="top-10-tag">Top 10</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Skills;
