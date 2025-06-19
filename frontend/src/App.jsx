import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import Nav from './assets/components/Nav/Nav';
import Footer from './assets/components/Footer/Footer';
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';

const App = () => {
  return (
    <main className='main-component'>
      <div id='navbar-component'>
        <Nav />
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


