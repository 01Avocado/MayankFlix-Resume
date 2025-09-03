import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ id }) => {
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const experienceData = [
    {
      company: 'Asymmeterical Learning',
      role: 'AI Intern',
      location: 'Pune, Maharashtra',
      date: '05/2025 - 08/2025',
      details: [  
        'Engineered, fine-tuned, and validated AI models for concept extraction and content generation, improving accuracy and efficiency.',
        'Optimized prompt-engineered outputs and voice scripts for TTS systems, enhancing user experience and model performance.',
        'Developed and deployed two microservices to enhance core functionality within a live mobile application.',
        'Built a full-stack riddles application from scratch with a planned launch on the Google Play Store within the first 2 weeks of Sep 2025.',
        'Managed end-to-end data pipelines by performing data cleaning, exploration, and SQL database management to prepare and structure raw data for application use.'
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
    <div className="experience-container" id={id}>
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Work Experience</span>
      </h2>

      <div className="experience-list">
        {experienceData.map((entry, index) => (
          <div
            className="experience-item"
            key={index}
            onMouseEnter={() => setHoveredExperience(index)}
            onMouseLeave={() => setHoveredExperience(null)}
          >
            <div className="experience-content">
              <h3>{entry.role} at {entry.company}</h3>
              {hoveredExperience === index && (
                <div className="experience-details">
                  <p>{entry.location}</p>
                  <p className="dates">{entry.date}</p>
                  <ul>
                    {entry.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

