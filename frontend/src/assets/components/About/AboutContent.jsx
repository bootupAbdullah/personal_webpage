import React from 'react';
import './AboutContent.css';

const AboutContent = ({ onToggle }) => (
  <div className="about-content">
    <div className="about-content__header">
      <h1>Hello! 👋</h1>
    </div>
    
    <div className="about-content__text">
      <p>I'm a software engineer who transitioned from accounting to build meaningful, user-centered applications. After years in finance, I discovered my passion for creating tools that solve real problems.</p>
      
      <p>I completed General Assembly's intensive software engineering program, building full-stack applications with React, Node.js, Python, and Django. My projects include a Marvel API integration with authentication, an interview sharing platform, and a movie recommendation app — deployed using Netlify and Railway.</p>
      
      <p>Currently, I'm contributing to open-source projects through the ProgramEarth DevSecOps Fellowship, expanding my skills in cloud infrastructure and CI/CD pipelines. My accounting background brings discipline and attention to detail to my development work.</p>
      
      <p>I'm seeking my first software development role where I can contribute technical skills, collaborate with mission-aligned teams, and continue building applications that serve people well.</p>
      
      <p><strong>Tech Stack:</strong> JavaScript, React, Node.js, Python, Django, Netlify, Railway, MongoDB, PostgreSQL, AWS</p>
    </div>
    
    <div className="about-content__actions">
      <button onClick={onToggle} className="about-content__arrow-btn">
        <img src="src/assets/images/svg/right-arrow-svgrepo-com.svg" alt="View Certifications" />
      </button>
    </div>
  </div>
);

export default AboutContent;