import React, { useState } from 'react';
import AboutContent from './AboutContent';
import Experience from './Experience';
import './About.css';

const About = () => {
  const [showCerts, setShowCerts] = useState(false);

  const toggleView = () => setShowCerts(!showCerts);

  return (
    <div className="about-page">
      {showCerts ? <Experience onToggle={toggleView} /> : <AboutContent onToggle={toggleView} />}
    </div>
  );
};

export default About;