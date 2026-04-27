import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 px-8 md:px-16 py-16 min-h-[75vh]">

      {/* Left — hero */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <img
          src="/images/profile_pic.webp"
          alt="Abdullah Durrani"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-2 border-[#ccd5ae] shadow-md transition-all duration-200 hover:border-[#d4a373] hover:shadow-lg"
        />
        <div>
          <h1 className="font-['Merriweather'] text-2xl font-bold text-[#2d2d2d] m-0 leading-tight">Abdullah Durrani</h1>
          <p className="font-['Merriweather'] text-sm text-[#d4a373] m-0 mt-1">Software Engineer</p>
        </div>

        <p className="font-['Merriweather'] text-sm text-[#666666] leading-relaxed max-w-xs">
          Building things for the web. Focused on backend, cloud, and DevOps. I love Go.
        </p>

        <div className="flex gap-4">
          <SocialIcon href="https://www.linkedin.com/in/abdullah-durrani" src="images/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" />
          <SocialIcon href="https://github.com/bootupAbdullah" src="images/svg/github-142-svgrepo-com.svg" alt="GitHub" />
          <SocialIcon href="https://bsky.app/profile/layinthegrass.bsky.social" src="images/svg/bluesky_media_kit_logo_1.svg" alt="Bluesky" />
          <SocialIcon href="https://x.com/Abdullahkd36" src="images/svg/twitter-svgrepo-com.svg" alt="Twitter" />
        </div>

        <Link
          to="/about"
          className="font-['Merriweather'] text-xs text-[#d4a373] no-underline uppercase tracking-widest border border-[#d4a373] rounded-full px-4 py-2 transition-all duration-200 hover:bg-[#d4a373] hover:text-white"
        >
          About Me →
        </Link>
      </div>

      {/* Right — project cards */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <p className="font-['Merriweather'] text-xs uppercase tracking-widest text-[#aaaaaa] m-0">Projects</p>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
};

const SocialIcon = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-200 hover:scale-110" />
  </a>
);

const ProjectCard = ({ title, description, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white border border-[#e9edc9] rounded-lg px-5 py-4 no-underline shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#d4a373] hover:-translate-y-0.5"
  >
    <div className="flex justify-between items-start">
      <h3 className="font-['Merriweather'] text-sm font-bold text-[#333333] m-0 mb-1">{title}</h3>
      <span className="text-[#d4a373] text-sm ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
    </div>
    <p className="font-['Merriweather'] text-xs text-[#777777] m-0 leading-relaxed">{description}</p>
  </a>
);

export default Home;
