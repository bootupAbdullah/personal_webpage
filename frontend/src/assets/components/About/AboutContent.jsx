import React from 'react';

const AboutContent = ({ onToggle }) => (
  <div>
    <h1>Hello! 👋</h1>
    <p>I'm a software engineer who transitioned from accounting to build meaningful, user-centered applications. After years in finance, I discovered my passion for creating tools that solve real problems.</p>
    
    <p>I completed General Assembly's intensive software engineering program, building full-stack applications with React, Node.js, Python, and Django. My projects include a Marvel API integration with authentication, an interview sharing platform, and a movie recommendation app — deployed using Netlify and Railway.</p>
    
    <p>Currently, I'm contributing to open-source projects through the ProgramEarth DevSecOps Fellowship, expanding my skills in cloud infrastructure and CI/CD pipelines. My accounting background brings discipline and attention to detail to my development work.</p>
    
    <p>I'm seeking my first software development role where I can contribute technical skills, collaborate with mission-aligned teams, and continue building applications that serve people well.</p>
    
    <p><strong>Tech Stack:</strong> JavaScript, React, Node.js, Python, Django, Netlify, Railway, MongoDB, PostgreSQL, AWS</p>
    
    <button onClick={onToggle} className="arrow-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

export default AboutContent;