import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import classNames from "classnames";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className={classNames([
        classes.navNav,
        menuOpen ? classes.closestyle : classes.openstyle,
      ])}
    >
      <ul className={classes.ulLink}>
        <Link
          to="/"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Home</li>
        </Link>
        <Link
          to="/beers"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Beers</li>
        </Link>
        <Link
          to="/account"
          className={classes.navLinkSpecial}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Account</li>
        </Link>
        <Link
          to="/aboutUs"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>About Us</li>
        </Link>
        <Link
          to="/contact"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Contact Us</li>
        </Link>
        <Link
          to="/joinus"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Join Us</li>
        </Link>
        <Link
          to="/newsletter"
          className={classes.navLink}
          onClick={() => setMenuOpen(true)}
        >
          <li className={classes.liLink}>Newsletter</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
