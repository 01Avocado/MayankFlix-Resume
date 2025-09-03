import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'AI & Machine Learning', image: process.env.PUBLIC_URL + '/1.png' },
    { name: 'Full-Stack Mobile Development', image: process.env.PUBLIC_URL + '/2.png' },
    { name: 'Data Management', image: process.env.PUBLIC_URL + '/3.png' },
    { name: 'Collaboration & Teamwork', image: process.env.PUBLIC_URL + '/4.png' }, /* Placeholder */
    { name: 'Project Leadership & Ownership', image: process.env.PUBLIC_URL + '/5.png' },
    { name: 'Prompt Engineering', image: process.env.PUBLIC_URL + '/6.png' }, /* Placeholder */
    { name: 'Data Analysis & Visualization', image: process.env.PUBLIC_URL + '/7.png' },
    { name: 'Problem-Solving', image: process.env.PUBLIC_URL + '/8.png' },
    { name: 'Adaptability & Versatility', image: process.env.PUBLIC_URL + '/9.png' },
    { name: 'Communication', image: process.env.PUBLIC_URL + '/10.png' },
  ];

  return (
    <div className="skills-container">
      <h2 className="h1">
        <span className="accent-underline">Skills & Expertise</span>
      </h2>
      <div className="skills-carousel">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-number">{index + 1}</div>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <div className="skill-info-overlay">
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
