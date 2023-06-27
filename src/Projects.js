import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'NJF Bets',
      description: 'Betting application that allows users to place and track their bets.',
      details: [
        'Utilized an external API which provided updated live betting odds for daily sporting events.',
        'Developed a form for users to submit bets which appended to their profile.',
        'Implemented user accounts, complete with secure authentication protocols using Ruby on Rails, enabled users to track bets and add money to their balance.',
        'Incorporated a search feature so that users could filter through previously placed bets.'
      ],
      links: {
        github: 'https://github.com/nfears57/enbeaye-bets-frontend',
        backend: 'https://github.com/nfears57/enbeaye-bets',
        demo: 'https://vimeo.com/795683106/4733f16875'
      }
    },
    {
      title: 'Refurninishings',
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
      title: 'FLI-KIX',
      description: 'Application built using React where users can customize shoes by picking colors and save the shoes as non-fungible art.',
      details: [
        'Developed a checkout form that enables users to preview the artwork and complete the purchase using Ethereum.',
        'Implemented a virtual wallet that allows users to add currency, streamlining the checkout process.',
        'Designed and linked the navigation bar to each section of the webpage using NavLink.'
      ],
      links: {
        github: 'https://github.com/chris-t-li/project-fli-kix'
      }
    }
  ];

  const [expandedProject, setExpandedProject] = useState(null);
  const handleProjectClick = (index) => {
    if (index === expandedProject) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };
  return (
    <div className="projects-container">
      <h2 className="projects-title">Recommended Technical Projects For You</h2>
      <div className="project-items">
        {projectData.map((project, index) => (
          <div
            className={`project-item ${index === expandedProject ? 'expanded' : ''}`}
            key={index}
            onClick={() => handleProjectClick(index)}
          >
            <div className="project-header">
              <span className="project-title">{project.title}</span>
            </div>
            {index === expandedProject && (
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
            )}
          </div>
        ))}
      </div>
      <hr className="separator" />
    </div>
  );
};
export default Projects;