import React, { useState } from 'react';
import './Certifications.css';

const Certifications = ({ id }) => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificationsData = [
    { name: 'Introduction to Data Science (Cisco)', url: 'https://www.credly.com/badges/e0d81348-c8ba-4633-9707-cd822b2e800f/linked_in_profile', image: process.env.PUBLIC_URL + '/Python_CISCO.png'  },    
    { name: 'Data Science Job Simulation (BCG X, 2025)', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_zo6BzE7PucGj2moJX_1748544034276_completion_certificate.pdf', image: process.env.PUBLIC_URL + '/BCG X.png'  },
    { name: 'Data Anaylitics Virtual Experience (Delloite, 2025)', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_zo6BzE7PucGj2moJX_1749505461530_completion_certificate.pdf', image: process.env.PUBLIC_URL + '/Data_Delloite.png'  },    
    { name: 'Machine Learning I - Columbia University', url: 'https://badges.plus.columbia.edu/088ea40e-3fd1-476a-86bc-0a7249e4dc71', image: process.env.PUBLIC_URL + '/ML_Columbia.png'  },
    { name: 'Generative AI Fundamentals(Academy Accreditation)', url: 'https://credentials.databricks.com/6536dd1d-6676-4bfa-9fb2-f649982d8265#acc.rlmGF1cS', image: process.env.PUBLIC_URL + '/GEN AI_DB.png'  },
    { name: 'SQL and Relational Databases 101 (IBM Cognitive Class)', url: 'https://courses.cognitiveclass.ai/certificates/cda942825f8349a58a4925e9373c5cdd', image: process.env.PUBLIC_URL + '/SQL_IBM.png' },
    { name: 'Data Analysis with Python (IBM Cognitive Class)', url: 'https://courses.cognitiveclass.ai/certificates/d945da4c49be450ab02d1ef0822bf069', image: process.env.PUBLIC_URL + '/Data_IBM.png'  },
    { name: 'SQL(BASIC) - HackerRank', url: 'https://www.hackerrank.com/certificates/e9cb196455f8', image: process.env.PUBLIC_URL + '/SQL_HR.png'  },
    { name: 'Python 101 for Data Science (IBM Cognitive Class)', url: 'https://courses.cognitiveclass.ai/certificates/c5bd8e7e23ea4a7a982507d637a0c271', image: process.env.PUBLIC_URL + '/Python_IBM.png' },
    { name: 'Object-Oriented Programming Using C++', url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e79e9b7d-ff10-488b-a06c-6682fc34619b.pdf', image: process.env.PUBLIC_URL + '/C++.png'  },
    { name: 'Introduction to MS Excel', url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODEwNTIwN183NzQwOTc4MTc0MzEwNTc1NjI3Ni5wbmciLCJ1c2VybmFtZSI6Ik1BWUFOSyBHQU5HUkVESVdBUiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4277%2FIntroduction%2520to%2520MS%2520Excel%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1458574631811049868&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV9%2FLIMyxwTiw2DUqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAPIHOcVBAAAA', image: process.env.PUBLIC_URL + '/Excel.png'  },
  ];

  return (
    <div className="certifications-container" id={id}>
      <h2 className="h1">
        <span className="accent-underline">Certifications</span>
      </h2>
      <div className="certifications-carousel">
        {certificationsData.map((cert, index) => (
          <div
            className="certification-item"
            key={index}
            onMouseEnter={() => setHoveredCert(index)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <img src={cert.image} alt={cert.name} className="certification-image" />
            {hoveredCert === index && (
              <div className="certification-overlay">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">
                  <span className="certification-name">{cert.name}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
