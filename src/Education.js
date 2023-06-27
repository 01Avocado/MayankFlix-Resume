import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      school: 'Flatiron School',
      program: 'Full Stack Web Development, Ruby on Rails, React and JavaScript',
      location: 'New York, NY',
      date: '09/2022 - 01/2023'
    },
    {
      school: 'University of Illinois at Urbana-Champaign',
      program: 'B.A. in Political Science',
      honor: "Dean's List Spring 2020, Fall 2020",
      location: 'Champaign, IL',
      date: '08/2016-12/2020'
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
      <h2>Education</h2>

      <div className="education-container">
        {educationData.map((entry, index) => (
          <div
            className={`resume-entry ${index === expandedEntry ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleEntryClick(index)}
          >
            <div className="resume-left">
              <h3>{entry.school}</h3>
              <p>{entry.location}</p>
              <p>{entry.date}</p>
            </div>
            {index === expandedEntry && (
              <div className="education-details">
                <p>{entry.program}</p>
                <p>{entry.honor}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
