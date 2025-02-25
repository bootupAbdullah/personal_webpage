import React from 'react';
import './Landing.css';

const Landing = ({ setPage }) => {
  const text = "Akd deV";

  return (
    <main>
      <div>
        <h1>
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
      </div>
      <div>
        <button onClick={() => setPage("Home")}>Enter</button>
      </div>
    </main>
  );
}

export default Landing;
