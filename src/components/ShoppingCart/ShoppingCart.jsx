import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={classes.shopping_cart}>
      <h2>Your cart</h2>
      {beers.map((beer) => (
        <CardCart key={beer.id} beer={beer} />
      ))}
    </section>
  );
};

export default ShoppingCart;
