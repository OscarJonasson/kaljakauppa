import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = (props) => {
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
        <Link to="/" className={classes.navLink}>
          <li className={classes.liLink}>Home</li>
        </Link>
        <Link to="/beers" className={classes.navLink}>
          <li className={classes.liLink}>Beers</li>
        </Link>
        <Link to="/aboutUs" className={classes.navLink}>
          <li className={classes.liLink}>About Us</li>
        </Link>
        <Link to="/contact" className={classes.navLink}>
          <li className={classes.liLink}>Contact Us</li>
        </Link>
        <Link to="/joinus" className={classes.navLink}>
          <li className={classes.liLink}>Join Us</li>
        </Link>
        <Link to="/newsletter" className={classes.navLink}>
          <li className={classes.liLink}>Newsletter</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
