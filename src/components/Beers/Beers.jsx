import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Beers.module.css";

const Beers = ({ beer, cartChanges, changeHandler }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa-json.herokuapp.com/beers")
      .then(res => setBeers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className={classes.beerGallery}>
      {beers.map(beer => (
        <CardGallery
          key={beer.id}
          beer={beer}
          cartChanges={cartChanges}
          changeHandler={changeHandler}
        />
      ))}
    </section>
  );
};

export default Beers;
