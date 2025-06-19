import React from 'react';

const Certificates = ({ onToggle }) => (
  <div>
    <button onClick={onToggle} className="back-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 19L9 12L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    <h2>Certifications</h2>
    <ul>
      <li>Software Engineering Immersive - General Assembly</li>
      <li>Responsive Web Design - freeCodeCamp</li>
    </ul>
  </div>
);

export default Certificates;