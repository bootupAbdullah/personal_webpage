import React from 'react';
import './home.css'

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div'>
       <div id='home-image-div'>
        <img id="home-image-src" src="src/assets/images/profile_pic.jpg" alt="Home" />
      </div>
      <div className='home-application-buttons'>
      <button onClick={() => setPage("CookieClickerGame")}>Cookie Clicker Game</button>
      <button onClick={() => setPage("MovieWatchList")}>Movie Wachlist App</button>
      <button onClick={() => setPage("ApplicationTracker")}>Application Tracker</button>
      <button onClick={() => setPage("InterviewShare")}>Interview Sharing<br />Platform</button>
      </div>
    </div>
  );
}

export default Home;


