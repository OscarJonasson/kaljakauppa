import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logobeer4.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");

  const hamburger = () => {
    setMenu(!menu);
    console.log(menu);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <header>
        <div className={classes.headerLeft}>
          <p className={classes.menu} onClick={hamburger}>
            <Nav customBurgerIcon={<i className="fa-solid fa-bars"></i>} />
            Menu <i className="fa-solid fa-bars"></i>
          </p>
          <div className={classes.searchContainer}>
            <form action={`/search/${search}`}>
              <input
                onChange={searchHandler}
                className={classes.searchBar}
                placeholder="Search..."
              ></input>
              <i
                className={`fa-solid fa-magnifying-glass ${classes.magGlass}`}
              ></i>
            </form>
          </div>
        </div>
        <div>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.headerRight}>
          <span className="material-symbols-outlined">person</span>
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
      </header>
      {/* {menu && (
        <div className={classes.nav}>
          <Nav />
        </div>
      )} */}
    </>
  );
};

export default Header;
