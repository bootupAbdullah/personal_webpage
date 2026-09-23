import React from 'react';

const bio = [
  "I'm a software engineer who discovered programming while working in tax preparation. What started as evening and weekend learning became a passion I couldn't ignore.",
  "After nearly two years of self-study, I took a leap and completed General Assembly's intensive software engineering program. I built full-stack applications exploring everything from API integrations to user authentication, always focused on solving real problems.",
  "Currently working as a Service Desk Analyst at IMB (International Mission Board), where I apply my technical background to systems troubleshooting, infrastructure support, and process improvement. My focus has shifted toward backend development, Go, cloud infrastructure, and DevOps — building on the systems thinking I use every day.",
  "My accounting background gave me discipline and an eye for detail that carries directly into development. Focused on deepening my backend and DevOps skills, and growing into engineering wherever that path leads.",
];

const skills = ['Go', 'JavaScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Linux', 'Shell', 'CI/CD'];

const jobs = [
  {
    company: 'IMB (International Mission Board)',
    location: 'Hybrid',
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
    location: 'Remote',
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

const About = () => (
  <div className="flex justify-center px-5 md:px-16 py-10 md:py-16">
    <div className="w-full max-w-[640px] flex flex-col gap-5 md:gap-6">

      <div>
        <div className="font-['JetBrains_Mono'] text-[11px] md:text-xs tracking-[0.1em] text-[var(--theme-text-muted)] mb-2">{'// ABOUT'}</div>
        <h1 className="m-0 font-['Space_Grotesk'] font-bold text-[28px] md:text-4xl leading-[1.15] text-[var(--theme-text-primary)]">Hey, I&apos;m Abdullah.</h1>
      </div>

      <div className="flex flex-col gap-3.5 border border-[var(--theme-border)] rounded-xl bg-[#FAF6EC] dark:bg-[var(--theme-surface)] px-4.5 py-4.5 md:px-7 md:py-6">
        {bio.map((p, i) => (
          <p key={i} className="m-0 font-['Work_Sans'] text-base md:text-base leading-relaxed text-[var(--theme-text-secondary)]">{p}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] bg-[#FAF6EC] dark:bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-md py-1.5 px-3"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="h-px bg-[var(--theme-border)] my-2 md:my-3" />

      <div>
        <div className="font-['JetBrains_Mono'] text-[11px] md:text-xs tracking-[0.1em] text-[var(--theme-text-muted)] mb-2">{'// EXPERIENCE'}</div>
        <div className="flex items-center justify-between gap-3">
          <h2 className="m-0 font-['Space_Grotesk'] font-bold text-xl md:text-[26px] text-[var(--theme-text-primary)]">Work History</h2>
          <a
            href="/documents/Resume.pdf"
            download="Abdullah_Durrani_Resume.pdf"
            className="flex-shrink-0 flex items-center gap-1.5 font-['JetBrains_Mono'] font-semibold text-[11px] md:text-xs text-[var(--theme-accent-on)] bg-[var(--theme-accent)] rounded-full py-1.5 px-3.5 md:py-2 md:px-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white dark:hover:text-gray-200!"
          >
            ↓ Resume
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:gap-[22px] mt-1">
        {jobs.map((job) => (
          <div key={job.company} className="border-l-2 border-[var(--theme-border)] pl-4 md:pl-[18px]">
            <div className="flex items-baseline justify-between gap-3">
              <div className="font-['Space_Grotesk'] font-bold text-sm md:text-[15px] text-[var(--theme-text-primary)]">
                {job.company}{job.location ? `, ${job.location}` : ''}
              </div>
              <div className="font-['JetBrains_Mono'] text-[10px] md:text-[11px] text-[var(--theme-text-muted)] whitespace-nowrap">{job.period}</div>
            </div>
            <div className="font-['JetBrains_Mono'] text-[11px] md:text-xs text-[var(--theme-accent)] my-1.5">{job.title}</div>
            <p className="m-0 font-['Work_Sans'] text-sm md:text-sm leading-relaxed text-[var(--theme-text-secondary)]">{job.description}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default About;
