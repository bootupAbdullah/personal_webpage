import React from 'react';
import './Landing.css'

const Landing = ({ setPage }) => {
  return (
    <main>
      <h1>adk dev</h1>
      <button onClick={() => setPage("Home")}>Enter</button>
    </main>
  );
}

export default Landing;
