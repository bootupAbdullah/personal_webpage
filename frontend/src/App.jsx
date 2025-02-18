import { useState } from 'react';
import './App.css';
import Landing from './assets/components/landing/Landing';
import Home from './assets/components/Home/Home';

const App = () => {
  const [page, setPage] = useState("Landing");

  return (
    <>
      {page === "Landing" && <Landing setPage={setPage} />}
      {page === "Home" && <Home />}
    </>
  );
}

export default App;
