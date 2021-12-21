import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div id="nav" className="f-row">
      <div id="left-nav" className="f-row">
        <h2>Bookstore CMS</h2>
        <ul className="f-row">
          <Link to="/">
            <li>Books</li>
          </Link>
          <Link to="Categories">
            <li>Categories</li>
          </Link>
        </ul>
      </div>
      <div id="right-nav">
        <FaUserAlt id="user" />
      </div>
    </div>
  );
}

export default Navbar;
