import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Search.module.css";

const Search = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setSearch(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={classes.beerGallery}>
      {beers.map((beer) => (
        <Link to={`${beer.id}`}>
          <CardGallery key={beer.id} beer={beer} />
        </Link>
      ))}
    </section>
  );
};

export default Search;
