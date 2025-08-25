import React from 'react';
import './Experience.css';

const Experience = ({ onToggle }) => (
  <div className="experience">
    <div className="experience__header">
      <div className="experience__title-row">
        <h2 className="experience__title">Experience</h2>
        <a 
          href="/documents/Resume.pdf" 
          download="Abdullah_Durrani_Resume.pdf"
          className="experience__download-btn"
          title="Download Full Resume"
        >
          <img src="images/svg/download-svgrepo-com.svg" alt="Download Resume" />
        </a>
      </div>
    </div>
    
    <div className="experience__content">
      <div className="experience__jobs">
        
        <div className="experience__job">
          <h4 className="experience__company-name">JOVESEC, Remote</h4>
          <p className="experience__job-title">Software Engineer Intern | August 2025 - Present</p>
          <p className="experience__job-description">Working on backend and full-stack development projects using Node.js, PostgreSQL, Prisma, Express.js, and React. Building scalable REST APIs and database solutions while gaining experience in collaborative, remote development workflows.</p>
        </div>
        
        <div className="experience__job">
          <h4 className="experience__company-name">ProgramEarth</h4>
          <p className="experience__job-title">DevSecOps Fellow | May 2025 - July 2025</p>
          <p className="experience__job-description">10-week open-source fellowship focused on secure full-stack development using Docker, Node.JS, Twilio, CI/CD, and GitHub Actions. Contributing to real codebases and participating in cloud infrastructure workshops.</p>
        </div>
        
        <div className="experience__job">
          <h4 className="experience__company-name">General Assembly, Remote</h4>
          <p className="experience__job-title">Software Engineer Fellow | October 2024 - January 2025</p>
          <p className="experience__job-description">Completed intensive software engineering program, delivering multiple full-stack projects with focus on user-centric web applications.</p>
        </div> 
      </div>
    </div>
    
    <div className="experience__actions">
      <button className="experience__back-btn" onClick={onToggle}>
        <img className="experience__back-icon" src="images/svg/left-arrow-svgrepo-com.svg" alt="Back" />
      </button>
    </div>
  </div>
);

export default Experience;