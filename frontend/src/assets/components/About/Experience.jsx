import React from 'react';
import './Experience.css';

const Experience = ({ onToggle }) => (
  <div className="experience">
    <div className="experience__header">
      <h2 className="experience__title">Experience</h2>
    </div>
    
    <div className="experience__content">
      <div className="experience__section">
        <h3 className="experience__section-title">SOFTWARE ENGINEER</h3>
        
        <div className="experience__job">
          <h4 className="experience__company-name">General Assembly, Remote</h4>
          <p className="experience__job-title">Software Engineer Fellow | October 2024 - January 2025</p>
          <p className="experience__job-description">Completed intensive software engineering program, delivering multiple full-stack projects with focus on user-centric web applications.</p>
        </div>
        
        <div className="experience__job">
          <h4 className="experience__company-name">EW Moore & Co, Accounting and Tax Services, Ashland, VA</h4>
          <p className="experience__job-title">Tax Preparer | October 2022 – Present</p>
          <p className="experience__job-description">Process client tax data using ProSeries software, ensuring regulatory compliance. Developed Python automation script for document management.</p>
        </div>
        
        <div className="experience__job">
          <h4 className="experience__company-name">Copper Spring Apartments, Henrico, VA</h4>
          <p className="experience__job-title">Leasing Consultant | March 2019 – September 2021</p>
          <p className="experience__job-description">Managed resident services, guided prospective tenants through needs assessments, and conducted competitive market analysis.</p>
        </div>
      </div>
    </div>
    
    <div className="experience__actions">
      <button className="experience__back-btn" onClick={onToggle}>
        <img className="experience__back-icon" src="src/assets/images/svg/left-arrow-svgrepo-com.svg" alt="Back" />
      </button>
    </div>
  </div>
);

export default Experience;