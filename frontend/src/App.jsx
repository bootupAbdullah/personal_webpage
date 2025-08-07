import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import Nav from './assets/components/Nav/Nav';
import Footer from './assets/components/Footer/Footer';
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`main-component ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <div id='navbar-component'>
        <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;