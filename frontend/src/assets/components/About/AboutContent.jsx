import React from 'react';
import './AboutContent.css';

const AboutContent = ({ onToggle }) => (
  <div className="about-content">
    <div className="about-content__header">
      <h1>Hello! 👋</h1>
    </div>
    
    <div className="about-content__text">
      <p>I'm a software engineer who discovered programming while working in tax preparation. What started as evening and weekend learning became a passion I couldn't ignore.</p>
      
      <p>After nearly two years of self-study, I took a leap and completed General Assembly's intensive software engineering program. I built full-stack applications exploring everything from API integrations to user authentication, always focused on solving real problems.</p>
      
      <p>Currently, I'm contributing to open-source projects through the ProgramEarth DevSecOps Fellowship while continuing to learn and build. My accounting background taught me discipline and attention to detail - qualities that serve me well in development.</p>
      
      <p>I'm ready for my first software development role where I can contribute, collaborate, and keep growing as a developer.</p>
      
      <p><strong>Tech Stack:</strong> JavaScript, React, Node.js, Python, Django, MongoDB, PostgreSQL, AWS</p>
    </div>
    
    <div className="about-content__actions">
      <button onClick={onToggle} className="about-content__arrow-btn">
        <img src="images/svg/right-arrow-svgrepo-com.svg" alt="View Experience" />
      </button>
    </div>
  </div>
);

export default AboutContent;