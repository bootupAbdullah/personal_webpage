import './Contact.css';

const Contact = () => {
return (
  <div className="contact-page">
    <h1 className="contact-title">Get In Touch</h1>
    <p className="contact-description">I'm actively seeking software development opportunities and would love to connect.</p>
    <div className="contact-links">
      <div className="contact-item">
        <img src="images/svg/gmail-svgrepo-com.svg" alt="Gmail" className="contact-icon" />
        <span className="contact-text"><strong>Email:</strong> <a href="mailto:akddev.co@gmail.com" className="contact-link">akddev.co@gmail.com</a></span>
      </div>
      
      <div className="contact-item">
        <img src="images/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" className="contact-icon" />
        <span className="contact-text"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abdullah-durrani/" target="_blank" rel="noopener noreferrer" className="contact-link">abdullah-durrani</a></span>
      </div>
      
      <div className="contact-item">
        <img src="images/svg/github-142-svgrepo-com.svg" alt="GitHub" className="contact-icon" />
        <span className="contact-text"><strong>GitHub:</strong> <a href="https://github.com/bootupAbdullah" target="_blank" rel="noopener noreferrer" className="contact-link">bootupAbdullah</a></span>
      </div>
    </div>
  </div>
);
};

export default Contact;