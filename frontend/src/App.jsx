import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home/Home';
import Nav from './assets/components/Nav/Nav';
import Footer from './assets/components/Footer/Footer';
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';
import Blog from './assets/components/Blog/Blog';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex flex-col justify-between font-['Merriweather'] bg-[#faf8f5] dark:bg-[#111111] go:bg-[#0F1F2E]">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
