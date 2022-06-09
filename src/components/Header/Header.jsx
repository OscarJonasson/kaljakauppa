import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logostroke2.webp";

const Header = ({ cartChanges }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 100);
    } else {
      setMenuOpen(true);
    }
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
        <div className={classes.headerDiv}>
          <div className={classes.headerLeft}>
            <p className={classes.menu} onClick={toggleMenu}>
              <span className={classes.menuWord}>Menu</span>{" "}
              <i className="fa-solid fa-bars"></i>
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
              <img
                className={classes.logo}
                src={logo}
                alt="logo"
                onClick={() => setMenuOpen(true)}
              />
            </Link>
          </div>
          <div className={classes.headerRight}>
            <Link to="login" className={classes.headLink}>
              <span
                onClick={() => setMenuOpen(true)}
                className={`material-symbols-outlined ${classes.headLogo}`}
              >
                person
              </span>
            </Link>
            <Link to="shoppingCart">
              <i
                onClick={() => setMenuOpen(true)}
                className="fa-solid fa-cart-shopping fa-1x"
              ></i>
              {cartCountHandler() > 0 && (
                <div className={classes.circle}>
                  <span
                    className={
                      cartCountHandler() > 9
                        ? classes.cartNumberSmall
                        : classes.cartNumber
                    }
                  >
                    {cartCountHandler()}
                  </span>
                </div>
              )}
            </Link>
          </div>
        </div>
        <div className={classes.mobileSearch}>
          <form action={`/search/${search}`}>
            <input
              onChange={searchHandler}
              className={classes.mobileSearchBar}
              placeholder="Search..."
            ></input>
            <i
              className={`fa-solid fa-magnifying-glass ${classes.mobileMagGlass}`}
            ></i>
          </form>
        </div>
      </header>

      <div className={classes.nav}>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
};

export default Header;
