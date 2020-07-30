import React from 'react';
import '../scss/ProjectsPage.scss';
import project1 from '../images/projects/project1.png';
import project2 from '../images/projects/project2.jpg';

const projectsArray = [
  { name: 'Project1', image: project1, alt: 'Project1 screenshot', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque?' },
  { name: 'Project2', image: project2, alt: 'Project2 screenshot', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque?' },
];

const ProjectsPage = () => {
  const projects = projectsArray.map(project => (
    <div className='projects__project' key={project.name}>
      <img className='projects__project-image' src={project.image} alt={project.alt} />
      <div className='projects__project-links'>
        <a className='projects__project_link' href='#'><span>Live</span></a>
        <a className='projects__project_link' href='#'><span>Code</span></a>
      </div>
      <div className='projects__project-info'>
        <p>{project.text}</p>
      </div>
    </div>
  ))

  return (
    <div className='main projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='projects__projects-container'>
        {projects}
      </div>
    </div >
  )
}

export default ProjectsPage;