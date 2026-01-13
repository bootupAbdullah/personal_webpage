import './Home.css';

const Home = ({ setPage }) => {
  return (
    <div className='home-container-div-1'>
     <h1 className='profile-name'>Abdullah Durrani</h1>
     <div className='hero-image-text-div'>
      <div className='profile-image-div'>
        <a href="https://www.linkedin.com/in/abdullah-durrani" target="_blank" rel="noopener noreferrer">
          <img className='profile-image'
            id="profile-image-src"
            src="/images/profile_image_2.webp"
            alt="Home"
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
      <div>
        <div className='hero-text-div'>
          <p>Hi, I am Abdullah.</p>
          <p>My passion is meticulous, detail oriented work that requires something of me. This is why I enjoy systems and backend programming.</p>
          <p>I love to communicate, understand and connect with people. This is why network programming is my favorite niche.</p>
          <p>Go is my favorite language and I have a shirt to prove it. This is because it requires pre-defined structure and uniformity (I know, booo! but I love it.) and this makes for systems that last.</p>
          <p>I work and play well with others and I am open to contract, freelance, and full-time opportunities.</p>
        </div>
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