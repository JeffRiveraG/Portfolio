import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="absolute top-4 right-8">
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/works">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
