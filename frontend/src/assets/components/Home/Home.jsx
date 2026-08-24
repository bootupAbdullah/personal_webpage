import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

const projects = [
  {
    title: 'Application Tracker',
    description: 'A dashboard to track and manage job applications throughout your search.',
    href: 'https://application-tracker-dash.netlify.app/',
  },
  {
    title: 'Cookie Clicker Game',
    description: 'A browser-based idle clicker game built for fun and to sharpen JS fundamentals.',
    href: 'https://bootupabdullah.github.io/portfolio_project_1_cookie_clicker_chronicles/',
  },
  {
    title: 'Movie Watchlist App',
    description: 'Browse, save, and organize movies you want to watch.',
    href: 'https://sprightly-naiad-897bbc.netlify.app',
  },
];

const Home = () => {
  const { activateGoTheme, theme } = useTheme();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 px-8 md:px-16 py-20 min-h-[85vh]">

      {/* Left — hero */}
      <div className="flex flex-col items-center md:items-start gap-6">
        <img
          src="/images/profile_pic.webp"
          alt="Abdullah Durrani"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-[#e0d5c5] dark:border-[#3a3a3a] go:border-[#2A4A5E] shadow-lg transition-all duration-200 hover:border-[var(--theme-accent)] hover:shadow-xl"
        />
        <div>
          <h1 className="font-['Merriweather'] text-5xl font-bold text-[var(--theme-accent)] m-0 leading-tight">Abdullah Durrani</h1>
          <p className="font-['Merriweather'] text-sm font-semibold text-[#2d2d2d] dark:text-[#e8e8e8] m-0 mt-2 uppercase tracking-[0.2em]">Software Engineer</p>
        </div>

        <p className="font-['Merriweather'] text-base text-[#555555] dark:text-[#a0a0a0] leading-relaxed max-w-sm">
          Building things for the web. Focused on backend, cloud, and DevOps. I love{' '}
          <span
            onClick={activateGoTheme}
            className="text-[var(--theme-accent)] cursor-pointer font-semibold hover:underline transition-all duration-200"
            title={theme === 'go' ? 'Exit Go theme' : 'You know what to do'}
          >
            Go
          </span>
          .
        </p>

        <div className="flex gap-5">
          <SocialIcon href="https://www.linkedin.com/in/abdullah-durrani" src="images/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" />
          <SocialIcon href="https://github.com/bootupAbdullah" src="images/svg/github-142-svgrepo-com.svg" alt="GitHub" invert />
          <SocialIcon href="https://bsky.app/profile/layinthegrass.bsky.social" src="images/svg/bluesky_media_kit_logo_1.svg" alt="Bluesky" />
          <SocialIcon href="https://x.com/Abdullahkd36" src="images/svg/twitter-svgrepo-com.svg" alt="Twitter" invert />
        </div>

        <Link
          to="/about"
          className="font-['Merriweather'] text-sm font-semibold text-white no-underline uppercase tracking-widest bg-[var(--theme-accent)] px-7 py-3 rounded-full transition-all duration-200 hover:bg-[var(--theme-accent-hover)] hover:shadow-lg hover:-translate-y-0.5"
        >
          About Me →
        </Link>
      </div>

      {/* Right — project cards */}
      <div className="flex flex-col gap-5 w-full max-w-md">
        <p className="font-['Merriweather'] text-xs font-bold uppercase tracking-[0.2em] text-[#aaaaaa] dark:text-[#666666] m-0 border-b border-[#e0d5c5] dark:border-[#333333] pb-3">Projects</p>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

const SocialIcon = ({ href, src, alt, invert = false }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className={`w-8 h-8 opacity-50 hover:opacity-100 transition-all duration-200 hover:scale-110 ${invert ? 'dark:invert' : ''}`} />
  </a>
);

const ProjectCard = ({ title, description, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white dark:bg-[#1e1e1e] go:bg-[#1A2D3E] border-2 border-[#e0d5c5] dark:border-[#333333] go:border-[#2A4A5E] rounded-lg px-5 py-4 no-underline shadow-md transition-all duration-200 hover:shadow-xl hover:border-[var(--theme-accent)] hover:-translate-y-1"
  >
    <div className="flex justify-between items-start">
      <h3 className="font-['Merriweather'] text-base font-bold text-[#333333] dark:text-[#dddddd] m-0 mb-1">{title}</h3>
      <span className="text-[var(--theme-accent)] text-sm ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
    </div>
    <p className="font-['Merriweather'] text-sm text-[#777777] dark:text-[#909090] m-0 leading-relaxed">{description}</p>
  </a>
);

export default Home;
