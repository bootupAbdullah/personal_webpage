import { useState } from 'react';
import './App.css';
import Home from './assets/components/Home/Home';
import Nav from './assets/components/Nav/Nav';

const App = () => {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Nav />
      {page === "Home" && <Home setPage={setPage} />}
    </>
  );
}

export default App;
