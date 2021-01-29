import React from 'react';
import '../scss/ProjectsPage.scss';
import project1 from '../images/projects/project1.jpg';
import project2 from '../images/projects/project2.jpg';
import project3 from '../images/projects/project3.jpg';

const projectsArray = [
  {
    name: 'Project1',
    image: project1,
    alt: 'Project1 screenshot',
    title: 'FLASHCARDS APPLICATION',
    technologies:
      'React, Redux, NodeJS, Express, MongoDB, Mongoose, ESLint, Netlify, Heroku, JWT, Bcrypt',
    codeLink: 'https://github.com/BartlomiejMogielnicki/flashcards-app-v2',
    link: 'https://flashcards-app-v2.netlify.app/',
  },
  {
    name: 'Project2',
    image: project2,
    alt: 'Project2 screenshot',
    title: 'BLACKJACK CARD GAME',
    technologies:
      'Javascript, SCSS, BEM, Webpack, Babel, Deckofcards API, Netlify',
    codeLink: 'https://github.com/BartlomiejMogielnicki/blackjack-game',
    link: 'https://bmogielnicki-blackjack-game.netlify.app/',
  },
  {
    name: 'Project3',
    image: project3,
    alt: 'Project3 screenshot',
    title: 'IMAGE FINDER',
    technologies: 'React, TypeScript, Unsplash API, Netlify',
    codeLink: 'https://github.com/BartlomiejMogielnicki/image-finder-v2',
    link: 'https://bmogielnicki-image-finder.netlify.app/',
  },
];

const ProjectsPage = () => {
  const projects = projectsArray.map((project) => (
    <div className="projects__project" key={project.name}>
      <img
        className="projects__project-image"
        src={project.image}
        alt={project.alt}
      />
      <div className="projects__project-links">
        <a
          className="projects__project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Live</span>
        </a>
        <a
          className="projects__project-link"
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Code</span>
        </a>
      </div>
      <div className="projects__project-info">
        <strong className="projects__project-info-title">
          {project.title}
        </strong>
        <p className="projects__project-info-subtitle">Used technologies:</p>
        <p className="projects__project-info-tech">{project.technologies}</p>
      </div>
    </div>
  ));

  return (
    <div className="main projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__projects-container">{projects}</div>
    </div>
  );
};

export default ProjectsPage;
