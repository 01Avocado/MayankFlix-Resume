import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      company: 'Green Street',
      role: 'Business Development Representative',
      location: 'New York, NY',
      date: '05/2022 - 09/2022',
      details: [
        'Tailored presentations of the platform, a tool used to give commercial real estate investors up-to-date information and research, to prospective customers by highlighting their company values informed by targeted client research.',
        'Created email campaigns targeting buyers of Commercial Real Estate.',
        'Analyzed campaign feedback and outcomes to adapt and develop a more efficient outreach strategy.'
      ]
    },
    {
      company: 'PHMG',
      role: 'Media Development Executive',
      location: 'Chicago, IL',
      date: '07/2021 - 02/2022',
      details: [
        'Contacted 80+ prospects a day, 100% self-generated through thoughtful independent research.',
        'Arranged in-person appointments with key decision-makers through cold-calling.',
        'Finished in the top 33% of all media development earners in November & December of 2021.'
      ]
    }
  ];

  const [expandedEntry, setExpandedEntry] = useState(null);

  const handleEntryClick = (index) => {
    if (index === expandedEntry) {
      setExpandedEntry(null);
    } else {
      setExpandedEntry(index);
    }
  };

  return (
    <div>
      <h2>Experience</h2>

      <div className="experience-container">
        {experienceData.map((entry, index) => (
          <div
            className={`resume-entry ${index === expandedEntry ? 'expanded' : ''}`}
            key={index}
          >
            <div className="resume-info" onClick={() => handleEntryClick(index)}>
              <div>
                <h3>{entry.company}</h3>
                <p>{entry.location}</p>
                <p>{entry.date}</p>
                <p>{entry.role}</p>
                {index === expandedEntry && (
              <ul className="experience-details">
                {entry.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Experience;

