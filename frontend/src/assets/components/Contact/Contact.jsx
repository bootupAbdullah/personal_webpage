import React from 'react';
import './Contact.css';

const Contact = () => {
 return (
   <div className="contact-page">
     <h1>Get In Touch</h1>
     <p>I'm actively seeking software development opportunities and would love to connect.</p>
     <div className="contact-links">
       <p><strong>Email:</strong> <a href="mailto:abdullahkd31@gmail.com">abdullahkd31@gmail.com</a></p>
       <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abdullah-durrani/" target="_blank" rel="noopener noreferrer">abdullah-durrani</a></p>
       <p><strong>GitHub:</strong> <a href="https://github.com/bootupAbdullah" target="_blank" rel="noopener noreferrer">bootupAbdullah</a></p>
     </div>
   </div>
 );
};

export default Contact;