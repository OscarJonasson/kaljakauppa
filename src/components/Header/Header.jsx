import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logostroke2.webp";

const Header = ({ cartChanges }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const hamburger = () => {
    const nav = document.querySelector("nav");
    if (menuOpen) {
      nav.style.opacity = 0;
      nav.style.visibility = "hidden";
      nav.style.top = "-12rem";
      setTimeout(() => {
        setMenuOpen(false);
      }, 200);
    } else {
      setMenuOpen(true);
      nav.style.visibility = "visible";
      nav.style.opacity = 1;
      nav.style.opacity = nav.style.top = "8rem";
    }
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const cartCountHandler = () => {
    const totalCount = cartChanges.map((beer) => {
      return beer.amount;
    });
    const initial = 0;
    const sumOfAll = totalCount.reduce(
      (prev, current) => prev + current,
      initial
    );
    return sumOfAll > 99 ? 99 : sumOfAll;
  };
  return (
    <>
      <header>
        <div className={classes.headerLeft}>
          <p className={classes.menu} onClick={hamburger}>
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
          <Link to="shoppingCart">
            <span className={`material-symbols-outlined ${classes.cartLogo}`}>
              shopping_cart
              {cartCountHandler() > 0 && (
                <div
                  className={
                    cartCountHandler() > 10
                      ? classes.circleOverTen
                      : classes.circle
                  }
                >
                  <span className={classes.cartNumber}>
                    {cartCountHandler()}
                  </span>
                </div>
              )}
            </span>
          </Link>
        </div>
      </header>
      <div className={classes.nav}>
        <Nav hamburger={hamburger} />
      </div>
    </>
  );
};

export default Header;
