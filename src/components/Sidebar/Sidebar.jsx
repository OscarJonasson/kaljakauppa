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
    const list = beers.map((beer) => {
      const breweryName = beer.brewery.brewery_name;
      // console.log(
      //   breweries.includes(breweryName)
      //     ? "df"
      //     : setBreweries(...breweries, breweryName)
      // );
      // console.log([...list, breweryName]);
      return breweries.includes(breweryName) ? null : breweryName.toLowerCase();
    });
    // console.log(list);
    // setBreweries("1");
    return list.map((brewery) => {
      return (
        <Link to={`/search/${brewery.substr(0, 4)}`}>
          <li>{brewery}</li>
        </Link>
      );
    });
  };

  // console.log(beers);
  return (
    <section className={classes.sidebar}>
      <h3>Breweries</h3>
      <ul className={classes.sidebar_breweries}>{breweryHandler()}</ul>
    </section>
  );
};

export default Sidebar;
