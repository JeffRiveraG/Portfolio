import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Inspo from './pages/Inspo';
import Statify from './pages/Statify'; 
import Shaders from './pages/Shaders'; 
import Pulsify from './pages/Pulsify'; 
import NCAS from './pages/NCAS';
import URE from './pages/URE';
import arrow from './images/vector light.svg';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col home">
      <h1 className="text-4xl font-bold">
        Hello, my name is Jeffrey.<br />
        But you can just call me Jeff.
      </h1>
      <p className="mt-6">
        I’m a Software Engineer. I am always learning new topics related to <br />
        programming and implementing them to projects in hopes to inspire others.
      </p>
      <div className="flex space-x-[93px] mt-6">
        <a href="/works">
          <div className="flex space-x-2 hover-underline-dark w-[95px] text-nowrap">
            <p>My Projects</p>
            <img src={arrow} alt="arrow" />
          </div>
        </a>
        <a href="/about">
          <div className="flex space-x-2 hover-underline-dark w-[85px] text-nowrap">
            <p>About Me</p>
            <img src={arrow} alt="arrow" />
          </div>
        </a>
        <a href="/contact">
          <div className="flex space-x-2 hover-underline-dark w-[95px] text-nowrap">
            <p>Contact Me</p>
            <img src={arrow} alt="arrow" />
          </div>
        </a>
      </div>
    </div>
  );
}

function App() {
  // Custom component to conditionally render the Navbar
  const Layout = ({ children }) => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/'; // Navbar is shown on all pages except '/'
    return (
      <>
        {showNavbar && <Navbar />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inspo" element={<Inspo />} />
          <Route path="/projects/statify" element={<Statify />} />
          <Route path="/projects/shaders" element={<Shaders />} /> 
          <Route path="/projects/pulsify" element={<Pulsify />} /> 
          <Route path="/projects/ncas" element={<NCAS />} />
          <Route path="/projects/ure" element={<URE />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
