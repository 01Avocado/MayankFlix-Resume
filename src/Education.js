import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: 'Pimpri Chinchwad College of Engineering',
      program: 'B.E. in Computer Engineering',
      location: 'Pune, Maharashtra',
      date: '11/2022 - 06/2026',
      grades: 'Expected 2026, CGPA 7.67'
    },
    {
      school: 'Pimpri Chinchwad College of Engineering',
      program: 'Honors in Deep Learning and AI',
      location: 'Pune, Maharashtra',
      date: '08/2024-06/2026',
      grades: 'CGPA 9.0'
    },
    {
      school: 'Indian School Certificate',
      program: 'Maharshi Jiwatode Junior College',
      location: 'Chandrapur',
      date: '2020 - 2022',
      grades: '83.83%'
    }
  ];

  return (
    <div className="education-container">
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Education</span>
      </h2>

      <div className="education-list">
        {educationData.map((entry, index) => (
          <div className="education-item" key={index}>
            <h3>{entry.school}</h3>
            <p>{entry.program}</p>
            <p>{entry.location}</p>
            <p className="dates-grades">{entry.date} {entry.grades ? `(${entry.grades})` : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
