import React from 'react';
import logoHtml from '../images/logos/html_logo.png';
import logoCss from '../images/logos/css_logo.png';
import logoJs from '../images/logos/js_logo.png';
import logoNpm from '../images/logos/npm_logo.png';
import logoSass from '../images/logos/sass_logo.png';
import logoReact from '../images/logos/react_logo.png';

const skillsArr = [
    { name: 'Html', img: logoHtml, alt: 'HTML logo' },
    { name: 'Css', img: logoCss, alt: 'CSS logo' },
    { name: 'Js', img: logoJs, alt: 'JS logo' },
    { name: 'React', img: logoReact, alt: 'REACT logo' },
    { name: 'Npm', img: logoNpm, alt: 'NPM logo' },
    { name: 'Sass', img: logoSass, alt: 'SASS logo' },
]

const Skills = () => {
    const skills = skillsArr.map(skill => (
        <li className='about__skills-item' key={skill.name}>
            <img className='about__skills-item-logo' src={skill.img} alt={skill.alt} />
        </li>
    ))
    return (
        skills
    );
}

export default Skills;