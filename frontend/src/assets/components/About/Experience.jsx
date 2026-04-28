import React from 'react';

const jobs = [
  {
    company: 'IMB (International Mission Board)',
    location: 'Remote',
    title: 'Service Desk Analyst',
    period: 'Mar 2026 – Present',
    description: 'Applying technical fluency to accelerate ticket diagnostics and improve resolution accuracy across software, access, and connectivity issues. Utilized SolarWinds for ticket management, Azure AD for identity and access troubleshooting, Jamf for endpoint management, and Omnitza for IT asset management. Contributed to internal process documentation and knowledge base development, including AI-assisted triage workflows via Microsoft Copilot and Copilot Studio.',
  },
  {
    company: 'JOVESEC',
    location: 'Remote',
    title: 'Software Engineer',
    period: 'Aug 2025 – Oct 2025',
    description: 'Contributed to production codebase implementing real-time notification systems and security validation features using React, Node.js, and TDD methodologies. Developed full-stack components analyzing React routing architecture and implementing detection logic for database monitoring in Agile environment.',
  },
  {
    company: 'ProgramEarth',
    location: '',
    title: 'DevSecOps Fellow',
    period: 'May 2025 – Jul 2025',
    description: '10-week open-source fellowship focused on secure full-stack development using Docker, Node.JS, Twilio, CI/CD, and GitHub Actions. Contributing to real codebases and participating in cloud infrastructure workshops.',
  },
  {
    company: 'General Assembly',
    location: 'Remote',
    title: 'Software Engineer Fellow',
    period: 'Oct 2024 – Jan 2025',
    description: 'Completed intensive software engineering program, delivering multiple full-stack projects with focus on user-centric web applications.',
  },
];

const Experience = ({ onToggle }) => (
  <div className="flex flex-col items-center max-w-xl mx-auto px-8 py-14">
    <div className="flex items-center justify-between w-full mb-8">
      <div>
        <p className="font-['Merriweather'] text-xs uppercase tracking-widest text-[#aaaaaa] dark:text-[#666666] m-0 mb-1">Work</p>
        <h2 className="font-['Merriweather'] text-2xl font-bold text-[#2d2d2d] dark:text-[#e8e8e8] m-0">Experience</h2>
      </div>
      <a
        href="/documents/Resume.pdf"
        download="Abdullah_Durrani_Resume.pdf"
        className="flex items-center gap-2 font-['Merriweather'] text-xs text-[var(--theme-accent)] border border-[var(--theme-accent)] rounded-full px-4 py-2 no-underline transition-all duration-200 hover:bg-[var(--theme-accent)] hover:text-white"
        title="Download Resume"
      >
        <img src="images/svg/download-svgrepo-com.svg" alt="" className="w-3.5 h-3.5 dark:invert" />
        Resume
      </a>
    </div>

    <div className="w-full space-y-7">
      {jobs.map((job) => (
        <div key={job.company} className="relative pl-5 border-l-2 border-[#e9edc9] dark:border-[#333333] go:border-[#2A4A5E] hover:border-[var(--theme-accent)] transition-colors duration-300">
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="font-['Merriweather'] font-bold text-sm text-[#2d2d2d] dark:text-[#e8e8e8] m-0">
              {job.company}{job.location ? `, ${job.location}` : ''}
            </h4>
            <span className="font-['Merriweather'] text-xs text-[#aaaaaa] dark:text-[#666666] ml-4 shrink-0">{job.period}</span>
          </div>
          <p className="font-['Merriweather'] text-xs text-[var(--theme-accent)] m-0 mb-2">{job.title}</p>
          <p className="font-['Merriweather'] text-xs text-[#666666] dark:text-[#a0a0a0] leading-relaxed m-0">{job.description}</p>
        </div>
      ))}
    </div>

    <button
      onClick={onToggle}
      className="mt-10 flex items-center gap-2 bg-transparent border-none cursor-pointer font-['Merriweather'] text-xs text-[var(--theme-accent)] uppercase tracking-widest hover:gap-3 transition-all duration-200"
    >
      <span>←</span> Back
    </button>
  </div>
);

export default Experience;
