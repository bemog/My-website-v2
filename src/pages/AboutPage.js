import React from 'react';
import Skills from '../components/Skills';
import '../scss/AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="main about">
      <h2 className="about__experience-title">
        My former experience advantages:
      </h2>
      <div className="about__experience-container">
        <h3 className="about__experience-item-title">Team Play</h3>
        <p className="about__experience-item">
          I am a <span className="mark">team player</span>, I know the value of
          teamwork and good communication.
        </p>
      </div>
      <div className="about__experience-container">
        <h3 className="about__experience-item-title">Projects Workflow</h3>
        <p className="about__experience-item">
          Experience in <span className="mark">work on projects</span> -
          deadlines, stress, demanding customers, production issues, complaints.
        </p>
      </div>
      <div className="about__experience-container">
        <h3 className="about__experience-item-title">Team Menagement</h3>
        <p className="about__experience-item">
          Few years of <span className="mark">managing team</span> of
          technologists and constructors.
        </p>
      </div>
      <div className="about__experience-container">
        <h3 className="about__experience-item-title">Software Documentation</h3>
        <p className="about__experience-item">
          Frequent <span className="mark">usage of documentation</span> of
          software for technical drawing, 3D modelling and CNC machine
          programming.
        </p>
      </div>

      <div className="about__skills-container">
        <h2 className="about__skills-title">Technologies I use:</h2>
        <ul className="about__skills-list">
          <Skills />
        </ul>
        <ul className="about__skills-minor-list">
          <Skills minor />
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
