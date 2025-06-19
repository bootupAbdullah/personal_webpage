import React from 'react';
import './Certificates.css';

const Certificates = ({ onToggle }) => (
  <div className='certificates-container'>
    <h2>Certifications</h2>
    <ul>
      <li>Software Engineering Immersive - General Assembly</li>
      <li>Responsive Web Design - freeCodeCamp</li>
    </ul>
     <button onClick={onToggle} className="back-btn">
      <img src="src/assets/images/svg/left-arrow-svgrepo-com.svg" alt="Back" />
    </button>
  </div>
);

export default Certificates;