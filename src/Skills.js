import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'Python',
    'SQL',
    'C++',
    'C',
    'MATLAB',
    'Java',
    'Data Analysis',
    'SQL Database Management',
    'Data Visualization (Matplotlib, Seaborn)',
    'Exploratory Data Analysis (EDA)',
    'Data Wrangling with Pandas & NumPy',
    'Descriptive Statistics',
    'Basic Predictive Modeling (Scikit-learn)',
    'Statistics & Probability',
    'Machine Learning (Supervised and Unsupervised Learning)',
    'Basic Deep Learning Concepts',
    'Convolutional Neural Networks (CNN)',
    'Prompt Engineering (basic)',
    'Feature Engineering (basic)',
    'Audio and Speech Processing',
  ];

  const certifications = [
    { name: 'Python 101 for Data Science (IBM Cognitive Class)', url: '#' },
    { name: 'SQL and Relational Databases 101 (IBM Cognitive Class)', url: '#' },
    { name: 'Data Analysis with Python (IBM Cognitive Class)', url: '#' },
    { name: 'Introduction to MS Excel', url: '#' },
    { name: 'Machine Learning Onramp', url: '#' },
    { name: 'Deep Learning Onramp', url: '#' },
    { name: 'MATLAB Onramp', url: '#' },
    { name: 'Object-Oriented Programming Using C++', url: '#' },
    { name: 'Python Programming', url: '#' },
    { name: 'Generative AI Fundamentals (Academy Accreditation)', url: '#' },
    { name: 'Data Science Virtual Experience (BCG X, 2025)', url: '#' },
    { name: 'Introduction to Data Science (Cisco)', url: '#' },
  ];

  return (
    <div className="skills-container">
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Skills</span>
      </h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-box">
              <span className="skill-name">{skill}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Certifications</span>
      </h2>
      <div className="skills-list">
        {certifications.map((cert, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-box">
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">
                <span className="skill-name">{cert.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
