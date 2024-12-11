import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/vector light.svg';
import Transition from '../components/Transition';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col fade">
      <h1 className="text-4xl font-bold">
        Hello, my name is Jeffrey.<br />
        But you can just call me Jeff.
      </h1>
      <p className="mt-6">
        I’m a Software Engineer. I am always learning new topics related to
        <br />
        programming and implementing them to projects in hopes to inspire others.
      </p>
      <div className="flex space-x-[93px] mt-6">
        <Link to="/works">
          <div className="flex space-x-2 hover-underline-dark w-[95px] text-nowrap">
            <p>My Projects</p>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
        <Link to="/about">
          <div className="flex space-x-2 hover-underline-dark w-[85px] text-nowrap">
            <p>About Me</p>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex space-x-2 hover-underline-dark w-[95px] text-nowrap">
            <p>Contact Me</p>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Transition(Home);
