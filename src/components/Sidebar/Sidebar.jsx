import classes from "./Sidebar.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const breweryHandler = () => {
    return beers
      .map((beers) => {
        return beers.brewery.brewery_name;
      })
      .filter((breweryName, i, brewery) => {
        return brewery.indexOf(breweryName) === i;
      })
      .map((brewery) => {
        return (
          <Link
            className={classes.sidebar_breweries_li}
            key={brewery}
            to={`/search/${brewery.toLowerCase()}`}
            onClick={hideMenu}
          >
            <li>{brewery}</li>
          </Link>
        );
      });
  };

  const hideMenu = () => {
    const side = document.getElementById("sidebar");
    if (menuOpen) {
      side.style.visibility = "hidden";
      side.style.left = "-20%";
      side.style.position = "fixed";
      setMenuOpen(!menuOpen);
    } else {
      side.style.visibility = "visible";
      side.style.left = "0";
      side.style.bottom = "25%";
      setTimeout(() => {
        side.style.position = "sticky";
      }, 500);
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <>
      <div id="sidebar" className={classes.sidebar}>
        <div className={classes.callMeRelative}>
          <h3>Style</h3>
          <ul className={classes.sidebar_style}>
            <Link to={`/beers`} onClick={hideMenu}>
              <li>All Beers</li>
            </Link>
            <Link to={`/search/sipa`} onClick={hideMenu}>
              <li>IPA</li>
            </Link>
            <Link to={`/search/sstout`} onClick={hideMenu}>
              <li>Stout</li>
            </Link>
            <Link to={`/search/spale`} onClick={hideMenu}>
              <li>Pale Ale</li>
            </Link>
            <Link to={`/search/ssour`} onClick={hideMenu}>
              <li>Sour</li>
            </Link>
          </ul>
          <h3>Breweries</h3>
          <ul className={classes.sidebar_breweries}>{breweryHandler()}</ul>
        </div>

        <Link to={`/search/nonalcoholic`} onClick={hideMenu}>
          <button className={classes.nonAlco}> Non-alcoholic</button>
        </Link>

        <button className={classes.sesame} onClick={hideMenu}></button>
      </div>
      {!menuOpen && (
        <button className={classes.sesameClose} onClick={hideMenu}></button>
      )}
    </>
  );
};

export default Sidebar;
