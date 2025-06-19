import React from 'react';
import './Certificates.css';

const Certificates = ({ onToggle }) => (
 <div className="certificates">
   <div className="certificates__header">
     <h2>Certifications</h2>
   </div>
   
   <div className="certificates__content">
     <ul>
       <li>Software Engineering Immersive - General Assembly</li>
       <li>Responsive Web Design - freeCodeCamp</li>
     </ul>
   </div>
   
   <div className="certificates__actions">
     <button onClick={onToggle} className="certificates__back-btn">
       <img src="src/assets/images/svg/left-arrow-svgrepo-com.svg" alt="Back" />
     </button>
   </div>
 </div>
);

export default Certificates;