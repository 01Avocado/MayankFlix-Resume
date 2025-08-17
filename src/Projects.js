import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Batch Formation and Conflict Resolution',
      description: ' PCCOE Batch Management and Conflict Resolution System — Streamlit Web App',
      details: [
        'Developed a Streamlit app to automate batch creation and identify timetable conflicts.',
        'Processed data for 250+ students across 10+ time slots using Excel and OpenPyXL.',
        'Added downloadable scheduling reports, reducing the manual workload by 80%.'
      ],
      links: {
        github: 'https://github.com/01Avocado/Batch-Formation-and-Conflict-resolution',
        backend: 'https://github.com/nfears57/enbeaye-bets',
        demo: 'https://vimeo.com/795683106/4733f16875'
      }
    },
    {
      title: 'Refurnishings',
      description: 'Marketplace application enabling users to buy and sell used furniture.',
      details: [
        'Created a filter using React that allowed users to customize search results based on city or furniture type.',
        'Built a form that allowed users to add listings to the homepage for potential sales.',
        'Developed custom profile pages for users to track purchases and sales.',
        'Implemented user account functionality such as sign up and log in authentication using Ruby on Rails.'
      ],
      links: {
        github: 'https://github.com/nfears57/refurnishings',
        demo: 'https://vimeo.com/795686912/bfd43b6baf'
      }
    },
    {
      title: 'MayankFlix Resumé',
      description: 'My Resumé designed in the style of Netflix. Created using React.js.',
      details: [
        'Utilized a Logo creator tool to mirror the Netflix logo.',
        'Designed and linked the navigation bar to each to my specific webpages.',
        'Implemented the Netflix intro sound that plays when the profile is clicked'
      ],
      links: {
        github: 'https://github.com/nfears57/resume-app'
      }
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Recommended Technical Projects For You</span>
      </h2>
      <div className="project-items">
        {projectData.map((project, index) => (
          <div
            className="project-item"
            key={index}
          >
            <div className="project-header">
              <span className="project-title">{project.title}</span>
            </div>
            <div className="project-details">
              <p>{project.description}</p>
              <ul>
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.links.backend && (
                  <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                    Backend
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;