import React, { useState } from 'react';
import AboutContent from './AboutContent';
import Certificates from './Certificates';
import './About.css';

const About = () => {
  const [showCerts, setShowCerts] = useState(false);

  const toggleView = () => setShowCerts(!showCerts);

  return (
    <div className="about-page">
      {showCerts ? <Certificates onToggle={toggleView} /> : <AboutContent onToggle={toggleView} />}
    </div>
  );
};

export default About;