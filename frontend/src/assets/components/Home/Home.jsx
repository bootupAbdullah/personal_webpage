import React from 'react';
import './Home.css';

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div'>
      <div id='home-image-div'>
        <img className='profile-image'
          id="home-image-src"
          src="/images/profile_pic.jpg"
          alt="Home"
        />
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/abdullah-durrani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='social-icons-fill'
              src="images/svg/linkedin-svgrepo-com.svg" 
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/bootupAbdullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='social-icon-basic'
              src="images/svg/github-142-svgrepo-com.svg"
              alt="GitHub"
            />
          </a>
          <a
            href="https://bsky.app/profile/layinthegrass.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='social-icon-basic'
              src="images/svg/bluesky_media_kit_logo_1.svg"
              alt="Bluesky"
            />
          </a>
          <a
            href="https://x.com/Abdullahkd36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='social-icons-fill'
              src="images/svg/twitter-svgrepo-com.svg"
              alt="Twitter"
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
        <button onClick={() =>
            window.open(
              'https://application-tracker-dash.netlify.app/',
              '_blank',
              'noopener,noreferrer'
            )
          }
          >
          Application Tracker
        </button>
      </div>
    </div>
  );
};

export default Home;