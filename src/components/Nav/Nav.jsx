import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/beers">Beers</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/joinus">Join Us</Link>
          <Link to="/newsletter">Newsletter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
