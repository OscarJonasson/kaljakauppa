import React from "react";
import classes from "./FakeCarousel.module.css";

const FakeCarousel = ({ beer }) => {
  return (
    <div className={classes.breweryLogo}>
      <img
        className={classes.card_img}
        src={beer.brewery.brewery_label}
        alt={`${beer.brewery.brewery_name}`}
      />
      <p>{beer.brewery.brewery_name}</p>
    </div>
  );
};

export default FakeCarousel;
