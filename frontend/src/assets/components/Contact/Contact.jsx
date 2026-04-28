import React from 'react';

const Contact = () => (
  <div className="flex flex-col items-center justify-center py-16 px-8 min-h-[75vh]">
    <p className="font-['Merriweather'] text-xs uppercase tracking-widest text-[#aaaaaa] dark:text-[#666666] m-0 mb-4">Say Hello</p>
    <h1 className="font-['Merriweather'] text-2xl font-bold text-[#2d2d2d] dark:text-[#e8e8e8] m-0 mb-3">Get In Touch</h1>
    <p className="font-['Merriweather'] text-sm text-[#777777] dark:text-[#909090] mb-12 text-center max-w-sm leading-relaxed">
      I'm actively seeking software development opportunities and would love to connect.
    </p>

    <div className="flex flex-col gap-5 w-full max-w-sm">
      <ContactItem icon="images/svg/gmail-svgrepo-com.svg" alt="Gmail" label="Email">
        <a href="mailto:akddev.co@gmail.com" className="text-[var(--theme-accent)] no-underline hover:text-[var(--theme-accent-hover)] transition-colors duration-200">
          akddev.co@gmail.com
        </a>
      </ContactItem>
      <ContactItem icon="images/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" label="LinkedIn">
        <a href="https://www.linkedin.com/in/abdullah-durrani/" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-accent)] no-underline hover:text-[var(--theme-accent-hover)] transition-colors duration-200">
          abdullah-durrani
        </a>
      </ContactItem>
      <ContactItem icon="images/svg/github-142-svgrepo-com.svg" alt="GitHub" label="GitHub">
        <a href="https://github.com/bootupAbdullah" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-accent)] no-underline hover:text-[var(--theme-accent-hover)] transition-colors duration-200">
          bootupAbdullah
        </a>
      </ContactItem>
    </div>
  </div>
);

const ContactItem = ({ icon, alt, label, children }) => (
  <div className="flex items-center gap-4 bg-white dark:bg-[#1e1e1e] go:bg-[#1A2D3E] border border-[#e9edc9] dark:border-[#333333] go:border-[#2A4A5E] rounded-lg px-5 py-4 shadow-sm">
    <img src={icon} alt={alt} className="w-6 h-6 shrink-0 opacity-60 dark:invert" />
    <span className="font-['Merriweather'] text-sm text-[#555555] dark:text-[#b0b0b0]">
      <span className="font-bold text-[#333333] dark:text-[#dddddd]">{label}:</span>{' '}{children}
    </span>
  </div>
);

export default Contact;
