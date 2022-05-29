import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navNav}>
      <ul className={classes.ulLink}>
        <li className={classes.liLink}>
          <Link to="/" className={classes.navLink}>
            Home
          </Link>
        </li>
        <li className={classes.liLink}>
          <Link to="/beers" className={classes.navLink}>
            Beers
          </Link>
        </li>
        <li className={classes.liLink}>
          <Link to="/aboutUs" className={classes.navLink}>
            About Us
          </Link>
        </li>
        <li className={classes.liLink}>
          <Link to="/contact" className={classes.navLink}>
            Contact Us
          </Link>
        </li>
        <li className={classes.liLink}>
          <Link to="/joinus" className={classes.navLink}>
            Join Us
          </Link>
        </li>
        <li className={classes.liLink}>
          <Link to="/newsletter" className={classes.navLink}>
            Newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
