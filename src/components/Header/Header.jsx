import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <div className={classes.headerLeft}>
        <Nav />

        <i class="fa-solid fa-bars"></i>
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
