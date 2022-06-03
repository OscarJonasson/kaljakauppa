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
      .get("https://kaljakauppa-json.herokuapp.com/beers")
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
            // onClick={hideMenu}
          >
            <li>{brewery}</li>
          </Link>
        );
      });
  };

  const hideMenu = () => {
    const side = document.querySelector("sidebar");
    if (menuOpen) {
      side.style.visibility = "hidden";
      setMenuOpen(!menuOpen);
    } else {
      side.style.visibility = "visible";
      setMenuOpen(!menuOpen);
    }
    console.log(menuOpen);
  };

  return (
    <>
      <sidebar className={classes.sidebar}>
        <div className={classes.callMeRelative}>
          <Link to={`/search/nonalcoholic`} onClick={hideMenu}>
            Non-alcoholic
          </Link>
          <h3>Breweries</h3>
          <ul className={classes.sidebar_breweries}>{breweryHandler()}</ul>
        </div>
      </sidebar>
      <button
        className={menuOpen ? classes.sesame : classes.sesameClose}
        onClick={hideMenu}
      ></button>
    </>
  );
};

export default Sidebar;
