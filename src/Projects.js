import React from 'react';
import './Projects.css';

const Projects = ({ id }) => {

  const projectData = [
    {
      title: 'Batch Formation and Conflict Resolution',
      description: ' PCCOE Batch Management and Conflict Resolution System — Streamlit Web App',
      image: process.env.PUBLIC_URL + '/batch.png',
      details: [
        'Developed a Streamlit app to automate batch creation and identify timetable conflicts.',
        'Processed data for 250+ students across 10+ time slots using Excel and OpenPyXL.',
        'Added downloadable scheduling reports, reducing the manual workload by 80%.'
      ],
      links: {
        github: 'https://github.com/01Avocado/Batch-Formation-and-Conflict-resolution',
        demo: 'https://vimeo.com/795683106/4733f16875'
      }
    },
    {
      title: 'Wriddles Mobile Application',
      description: 'A mobile application that allows users to play riddles and earn rewards.',
      image: process.env.PUBLIC_URL + '/wriddles app.png',
      details: [
        'Designed and developed a full-stack mobile riddles application using Flutter (Dart) and Firebase, with a planned launch on the Google Play Store.',
        'Implemented a personalization engine that uses an AI explore-exploit algorithm to tailor riddles to user preferences.',
        'Utilized advanced technologies to automate riddle tagging and enrichment.'
      ],
      links: {
        github: 'https://github.com/01Avocado/Wriddles-App',
        Website: 'https://https://wriddles.com/'
      }
    },
    {
      title: 'MayankFlix Resumé',
      description: 'My Resumé designed in the style of Netflix. Created using React.js.',
      image: process.env.PUBLIC_URL + '/netflix.png',
      details: [
        'Utilized a Logo creator tool to mirror the Netflix logo.',
        'Designed and linked the navigation bar to each to my specific webpages.',
        'Implemented the Netflix intro sound that plays when the profile is clicked'
      ],
      links: {
        github: 'https://github.com/01Avocado/MayankFlix-Resume'
      }
    }
  ];

  return (
    <div className="projects-container" id={id}>
      <h2 className="h1" style={{fontSize:"clamp(36px, 5vw, 56px)", margin:"0 0 1.5rem"}}>
        <span className="accent-underline">Technical Projects</span>
      </h2>
      <div className="project-items">
        {projectData.map((project, index) => (
          <div
            className="project-item"
            key={index}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
