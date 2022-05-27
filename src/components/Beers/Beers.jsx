import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Beers.module.css";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setBeers(res.data))
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

export default Beers;
