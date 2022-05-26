import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const hamburger = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <header>
      <div className={classes.headerLeft}>
        {menu && (
          <div className={classes.nav}>
            <Nav />
          </div>
        )}
        <i className="fa-solid fa-bars" onClick={hamburger}></i>
        <div className={classes.searchContainer}>
          <input className={classes.searchBar} placeholder="Search..."></input>
          <i className={`fa-solid fa-magnifying-glass ${classes.magGlass}`}></i>
        </div>
      </div>
      <div className={classes.logo}>LOGO</div>
      <div className={classes.headerRight}>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </header>
  );
};

export default Header;
