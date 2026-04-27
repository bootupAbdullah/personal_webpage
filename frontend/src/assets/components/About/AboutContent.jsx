import React from 'react';

const AboutContent = ({ onToggle }) => (
  <div className="flex flex-col items-center max-w-xl mx-auto px-8 py-14">
    <p className="font-['Merriweather'] text-xs uppercase tracking-widest text-[#aaaaaa] m-0 mb-4">About Me</p>
    <h1 className="font-['Merriweather'] text-2xl font-bold text-[#2d2d2d] m-0 mb-8">Hello! 👋</h1>

    <div className="font-['Merriweather'] text-sm text-[#555555] leading-loose space-y-4 text-left">
      <p>I'm a software engineer who discovered programming while working in tax preparation. What started as evening and weekend learning became a passion I couldn't ignore.</p>
      <p>After nearly two years of self-study, I took a leap and completed General Assembly's intensive software engineering program. I built full-stack applications exploring everything from API integrations to user authentication, always focused on solving real problems.</p>
      <p>Currently working as a Service Desk Analyst at IMB (International Mission Board), where I apply my technical background to systems troubleshooting, infrastructure support, and process improvement. My focus has shifted toward backend development, Go, cloud infrastructure, and DevOps — building on the systems thinking I use every day.</p>
      <p>My accounting background gave me discipline and an eye for detail that carries directly into development. Focused on deepening my backend and DevOps skills, and growing into engineering wherever that path leads.</p>
    </div>

    <div className="flex flex-wrap gap-2 mt-6 justify-start w-full">
      {['Go', 'JavaScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Linux', 'Shell', 'CI/CD'].map(skill => (
        <span key={skill} className="font-['Merriweather'] text-xs bg-[#f0ece4] text-[#d4a373] border border-[#e9edc9] rounded-full px-3 py-1">
          {skill}
        </span>
      ))}
    </div>

    <button
      onClick={onToggle}
      className="mt-10 flex items-center gap-2 bg-transparent border-none cursor-pointer font-['Merriweather'] text-xs text-[#d4a373] uppercase tracking-widest hover:gap-3 transition-all duration-200"
    >
      View Experience <span>→</span>
    </button>
  </div>
);

export default AboutContent;
