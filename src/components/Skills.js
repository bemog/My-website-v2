import React from 'react';
import logoHtml from '../images/logos/html_logo.png';
import logoCss from '../images/logos/css_logo.png';
import logoJs from '../images/logos/js_logo.png';
import logoNpm from '../images/logos/npm_logo.png';
import logoSass from '../images/logos/sass_logo.png';
import logoReact from '../images/logos/react_logo.png';

const skillsArr = [
    { name: 'Html', src: logoHtml, alt: 'HTML logo' },
    { name: 'Css', src: logoCss, alt: 'CSS logo' },
    { name: 'Js', src: logoJs, alt: 'JS logo' },
    { name: 'React', src: logoReact, alt: 'REACT logo' },
    { name: 'Npm', src: logoNpm, alt: 'NPM logo' },
    { name: 'Sass', src: logoSass, alt: 'SASS logo' },
]

const Skills = () => {
    const skills = skillsArr.map(skill => (
        <li className='about__skills-item' key={skill.name}>
            <img className='about__skills-item-logo' src={skill.src} alt={skill.alt} />
        </li>
    ))
    return (
        skills
    );
}

export default Skills;