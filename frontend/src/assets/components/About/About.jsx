import React, { useState } from 'react';
import AboutContent from './AboutContent';
import Experience from './Experience';

const About = () => {
  const [showCerts, setShowCerts] = useState(false);

  const toggleView = () => setShowCerts(!showCerts);

  return (
    <div>
      {showCerts ? <Experience onToggle={toggleView} /> : <AboutContent onToggle={toggleView} />}
    </div>
  );
};

export default About;

