import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Beers.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Beers = ({ cartChanges, changeHandler }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className={classes.beerGallery}>
        {beers.map((beer) => (
          <CardGallery
            key={beer.id}
            beer={beer}
            cartChanges={cartChanges}
            changeHandler={changeHandler}
          />
        ))}
      </section>
      <Sidebar />
    </>
  );
};

export default Beers;
