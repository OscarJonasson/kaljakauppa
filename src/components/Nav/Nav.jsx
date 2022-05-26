import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    <Menu>
      <Link to="/">Home</Link>
      <Link to="/beers">Beers</Link>
      <Link to="/aboutUs">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </Menu>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Nav;
