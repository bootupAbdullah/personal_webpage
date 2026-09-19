import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    filename: 'application-tracker.ts',
    title: 'Application Tracker',
    description: 'A dashboard to track and manage job applications throughout your search.',
    href: 'https://application-tracker-dash.netlify.app/',
    featured: true,
  },
  {
    filename: 'cookie-clicker.js',
    title: 'Cookie Clicker Game',
    description: 'A browser-based idle clicker game built for fun and to sharpen JS fundamentals.',
    href: 'https://bootupabdullah.github.io/portfolio_project_1_cookie_clicker_chronicles/',
  },
  {
    filename: 'watchlist.py',
    title: 'Movie Watchlist App',
    description: 'Browse, save, and organize movies you want to watch.',
    href: 'https://sprightly-naiad-897bbc.netlify.app',
  },
];

const socials = [
  { label: 'in', href: 'https://www.linkedin.com/in/abdullah-durrani', alt: 'LinkedIn' },
  { label: 'gh', href: 'https://github.com/bootupAbdullah', alt: 'GitHub' },
  { label: 'bs', href: 'https://bsky.app/profile/layinthegrass.bsky.social', alt: 'Bluesky' },
  { label: 'x', href: 'https://x.com/Abdullahkd36', alt: 'Twitter / X' },
];

const stack = ['Go', 'Python', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Terraform'];

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14 px-5 md:px-16 py-8 md:py-16">

        {/* Left column */}
        <div className="flex-none md:basis-[44%] flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 py-1.5 px-3 border border-[var(--theme-border)] rounded-full bg-[var(--theme-surface)] w-fit">
            <span className="w-[7px] h-[7px] rounded-full bg-[var(--theme-accent)]" />
            <span className="font-['JetBrains_Mono'] text-[10px] md:text-[11px] tracking-[0.12em] text-[var(--theme-text-secondary)]">AVAILABLE FOR WORK</span>
          </div>

          <h1 className="m-0 font-['Space_Grotesk'] font-bold text-4xl md:text-5xl leading-[1.1] text-[var(--theme-text-primary)]">Abdullah Durrani</h1>

          <p className="m-0 text-sm md:text-base font-medium text-[var(--theme-accent)]">Software Engineer — Backend, Cloud &amp; DevOps</p>

          <p className="m-0 max-w-[420px] text-sm leading-relaxed text-[var(--theme-text-secondary)]">
            I build and ship backend systems, cloud infrastructure, and the pipelines that hold them together.
            Currently deep in Go, Kubernetes, and things that run on servers I don't have to think about twice.
          </p>

          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
                className="w-[34px] h-[34px] rounded-lg border border-[var(--theme-border)] flex items-center justify-center font-['JetBrains_Mono'] text-xs text-[var(--theme-text-secondary)] transition-colors duration-200 hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)]"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-1">
            <Link
              to="/about"
              className="text-center px-6 py-3 rounded-lg bg-[var(--theme-accent)] text-[var(--theme-accent-on)] text-sm font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5"
            >
              About Me →
            </Link>
            <Link
              to="/blog"
              className="text-center px-6 py-3 rounded-lg border border-[var(--theme-border)] text-[var(--theme-text-primary)] text-sm font-semibold no-underline transition-colors duration-200 hover:border-[var(--theme-accent)]"
            >
              View Blog
            </Link>
          </div>
        </div>

        {/* Right column: project cards */}
        <div className="flex-1 flex flex-col gap-3.5">
          <div className="font-['JetBrains_Mono'] text-xs tracking-[0.1em] text-[var(--theme-text-muted)] mb-0.5">{'// PROJECTS'}</div>
          {projects.map((p) => (
            <ProjectCard key={p.filename} {...p} />
          ))}
        </div>
      </div>

      {/* STACK STRIP */}
      <div className="flex flex-wrap items-center gap-3 px-5 md:px-16 py-6 border-t border-[var(--theme-border)]">
        <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.12em] text-[var(--theme-text-muted)] mr-1">STACK</span>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="font-['JetBrains_Mono'] text-xs text-[var(--theme-text-secondary)] bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-md py-1.5 px-3"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ filename, title, description, href, featured = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block rounded-[10px] bg-[var(--theme-surface)] border overflow-hidden no-underline transition-colors duration-200 ${
      featured ? 'border-[var(--theme-accent)]' : 'border-[var(--theme-border)] hover:border-[var(--theme-accent)]'
    }`}
  >
    <div className="h-[34px] flex items-center gap-2 px-3.5 bg-[var(--theme-surface-topbar)] border-b border-[var(--theme-border)]">
      <span className="w-[9px] h-[9px] rounded-full bg-[#C9776A] dark:bg-[#8B4A3E]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#D9A857] dark:bg-[#A67C3D]" />
      <span className="w-[9px] h-[9px] rounded-full bg-[#4FA97D] dark:bg-[#3D8B68]" />
      <span className="font-['JetBrains_Mono'] text-xs text-[var(--theme-text-muted)] ml-1">{filename}</span>
    </div>
    <div className="px-5 py-4 flex flex-col gap-1.5">
      <div className="font-['Space_Grotesk'] font-bold text-base text-[var(--theme-text-primary)]">{title}</div>
      <div className="text-[13px] leading-relaxed text-[var(--theme-text-secondary)]">{description}</div>
      <div className={`font-['JetBrains_Mono'] text-xs mt-1 ${featured ? 'text-[var(--theme-accent)]' : 'text-[var(--theme-text-muted)] group-hover:text-[var(--theme-accent)]'}`}>
        open →
      </div>
    </div>
  </a>
);

export default Home;
