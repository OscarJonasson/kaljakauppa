import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = props => {
  // Couldnt get this to work
  // console.log(props.IsMenuOpen);
  // if (props.IsmenuOpen) {
  //   const nav = document.querySelector(".navNav");
  //   nav.style.animationName = "menuUp";
  //   console.log(nav);
  //   setTimeout(() => {
  //     props.setMenuOpen(false);
  //   }, 1000);
  // }

  // console.log(props.IsMenuOpen);

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
