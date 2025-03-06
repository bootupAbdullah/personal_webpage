import { useState } from 'react';
import './App.css';
import Home from './assets/components/Home/Home';
import Nav from './assets/components/Nav/Nav';

const App = () => {
  const [page, setPage] = useState("Home");

  return (
    <>
    <main className='main-component'>
      <div id='navbar-component'> 
      <Nav />
      </div>
      <div id='home-component'>
      {page === "Home" && <Home setPage={setPage} />}
      </div>
    </main>
    </>
  );
}

export default App;
