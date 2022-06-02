import classes from "./Sidebar.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [beers, setBeers] = useState([]);
  const [breweries, setBreweries] = useState([]);

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
        console.log(brewery);
        return (
          <Link to={`/search/${brewery.toLowerCase().substr(0, 4)}`}>
            <li>{brewery}</li>
          </Link>
        );
      });
  };

  return (
    <section className={classes.sidebar}>
      <h3>Breweries</h3>
      <ul className={classes.sidebar_breweries}>{breweryHandler()}</ul>
    </section>
  );
};

export default Sidebar;
