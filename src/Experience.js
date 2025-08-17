import React from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      company: 'Asymmeterical Learning',
      role: 'AI Intern',
      location: 'Pune, Maharashtra',
      date: '05/2025 - 08/2025',
      details: [
        'Developed a web application that uses AI to generate personalized study plans for students based on their learning style and academic goals.',
        'Created email campaigns targeting buyers of Commercial Real Estate.',
        'Analyzed campaign feedback and outcomes to adapt and develop a more efficient outreach strategy.'
      ]
    },
    {
      company: 'ETSA (Electronics and Telecommunication Students Association)',
      role: 'Vice President',
      location: 'Pune, Maharashtra',
      date: '07/2024 - 07/2025',
      details: [
        'Organized and managed the organization\'s events and activities.',
        'Collaborated with the team to ensure the success of the events.',
        'Managed the organization\'s budget and resources.'
      ]
    },
    {
      company: 'ETSA (Electronics and Telecommunication Students Association)',
      role: 'Event Manager',
      location: 'Pune, Maharashtra',
      date: '08/2023 - 07/2024',
      details: [
        'Coordinated a workshop on Raspberry Pi with a team of 10 members which received 200+ participants.',
        'Organized 20+ events and led 3 events in a span of 1 year.'
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Work Experience</span>
      </h2>

      <div className="experience-list">
        {experienceData.map((entry, index) => (
          <div className="experience-item" key={index}>
            <h3>{entry.role} at {entry.company}</h3>
            <p>{entry.location}</p>
            <p className="dates">{entry.date}</p>
            <ul>
              {entry.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

