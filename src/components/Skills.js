import React from 'react';
import PropTypes from 'prop-types';
import logoHtml from '../images/logos/html_logo.png';
import logoCss from '../images/logos/css_logo.png';
import logoJs from '../images/logos/js_logo.png';
import logoReact from '../images/logos/react_logo.png';
import logoNodejs from '../images/logos/nodejs_logo.png';

const skillsArr = [
  { name: 'Html', img: logoHtml, alt: 'HTML logo' },
  { name: 'Css', img: logoCss, alt: 'CSS logo' },
  { name: 'Js', img: logoJs, alt: 'JS logo' },
  { name: 'React', img: logoReact, alt: 'REACT logo' },
  { name: 'Nodejs', img: logoNodejs, alt: 'NODE JS logo' },
];

const minorSkillsArr = [
  'Npm',
  'Bootstrap',
  'ESLint',
  'Postman',
  'REST API',
  'Mongoose',
  'MongoDB',
  'Express',
  'Redux',
  'Git/Github',
  'BEM',
  'Sass/Scss',
  'CSS Modules',
  'Styled Components',
];

const Skills = ({ minor }) => {
  let skills;
  if (!minor) {
    skills = skillsArr.map((skill) => (
      <li className="about__skills-item" key={skill.name}>
        <img
          className="about__skills-item-logo"
          src={skill.img}
          alt={skill.alt}
        />
      </li>
    ));
  } else {
    skills = minorSkillsArr.map((skill, index) => (
      <li className="about__skills-minor-item" key={index}>
        {skill}
      </li>
    ));
  }
  return skills;
};

Skills.propTypes = {
  minor: PropTypes.bool,
};

Skills.defaultProps = {
  minor: false,
};

export default Skills;
