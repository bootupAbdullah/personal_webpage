import React from 'react';
import './home.css';

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div'>
      <div id='home-image-div'>
        <img
          id="home-image-src"
          src="src/assets/images/profile_pic.jpg"
          alt="Home"
        />
        <div className="social-icons">
          <a
            href="https://x.com/Abdullahkd36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/images/svg/twitter-svgrepo-com.svg"
              alt="Twitter"
            />
          </a>
          <a
            href="https://github.com/bootupAbdullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/images/svg/github-142-svgrepo-com.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-durrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/images/svg/linkedin-rounded-border-svgrepo-com.svg" 
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://bsky.app/profile/layinthegrass.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/images/svg/cloud-svgrepo-com.svg"
              alt="Bluesky"
            />
          </a>
        </div>
      </div>

      <div className='home-application-buttons'>
        <button
          onClick={() =>
            window.open(
              'https://bootupabdullah.github.io/portfolio_project_1_cookie_clicker_chronicles/',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Cookie Clicker Game
        </button>
        <button
          onClick={() =>
            window.open(
              'https://sprightly-naiad-897bbc.netlify.app',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Movie Watchlist App
        </button>
        <button onClick={() => setPage("ApplicationTracker")}>
          Application Tracker
        </button>
      </div>
    </div>
  );
};

export default Home;
