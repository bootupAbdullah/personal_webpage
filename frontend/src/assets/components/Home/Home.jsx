import React from 'react';
import './home.css';

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div'>
      <div id='home-image-div'>
        <img id="home-image-src" src="src/assets/images/profile_pic.jpg" alt="Home" />
      </div>
      <div className='home-application-buttons'>
        <button
          onClick={() => window.open('https://bootupabdullah.github.io/portfolio_project_1_cookie_clicker_chronicles/', '_blank', 'noopener,noreferrer')}
        >
          Cookie Clicker Game
        </button>
        <button
          onClick={() => window.open('https://sprightly-naiad-897bbc.netlify.app', '_blank', 'noopener,noreferrer')}
        >
          Movie Watchlist App
        </button>
        <button onClick={() => setPage("ApplicationTracker")}>Application Tracker</button>
      </div>
    </div>
  );
};

export default Home;