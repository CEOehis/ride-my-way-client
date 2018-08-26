import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="layout-grid navbar">
    <h1 className="brand"><Link to="/">RideMyWay</Link></h1>
    <button className="menu btn" type="button">
      <i className="fa fa-navicon" aria-hidden="true" />
    </button>
    <ul className="nav-links">
      <li>
        <Link to="/" className="brand">RideMyWay</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
