import classes from "./Sidebar.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa.herokuapp.com/beers")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const breweryHandler = () => {
    return beers
      .map((beers) => {
        return beers.brewery.brewery_name;
      })
      .filter((breweryName, i, brewery) => {
        // console.log("self", brewery, "index", i, "value", breweryName);
        // console.log(brewery.indexOf(breweryName) === i);
        return brewery.indexOf(breweryName) === i;
      })
      .map((brewery) => {
        // console.log(brewery);
        return (
          <Link
            key={brewery}
            to={`/search/${brewery.toLowerCase().substr(0, 4)}`}
            onClick={hideMenu}
          >
            <li>{brewery}</li>
          </Link>
        );
      });
  };

  const hideMenu = () => {
    // const side = document.querySelector("sidebar");
    const side = document.getElementById("sidebar");
    if (menuOpen) {
      side.style.visibility = "hidden";
      side.style.left = "-16%";
      side.style.transform = "scale(0.1)";
      side.style.position = "fixed";
      setMenuOpen(!menuOpen);
    } else {
      side.style.visibility = "visible";
      side.style.left = "0";
      side.style.transform = "scale(1)";
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
        <div className={classes.nonAlco}>
          <Link to={`/search/nonalcoholic`} onClick={hideMenu}>
            Non-alcoholic
          </Link>
        </div>
      </div>
      <button
        className={menuOpen ? classes.sesame : classes.sesameClose}
        onClick={hideMenu}
      ></button>
    </>
  );
};

export default Sidebar;
