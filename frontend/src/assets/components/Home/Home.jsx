import './Home.css';

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div-1'>
     <h1 className='profile-name'>Abdullah Durrani</h1>
     <div className='hero-image-text'>
      <div id='profile-image-div'>
        <a href="https://www.linkedin.com/in/abdullah-durrani" target="_blank" rel="noopener noreferrer">
          <img className='profile-image'
            id="profile-image-src"
            src="/images/portfolio_pic_2.webp"
            alt="Home"
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
     </div>
    
    <div className='home-container-div-2'>
      <div className='home-application-buttons'>
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
      </div>
    </div>
  
  </div>
);
};

export default Home;