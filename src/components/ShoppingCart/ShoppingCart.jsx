import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = ({ cartChanges, changeHandler }) => {
  //   const [beers, setBeers] = useState([]);
  console.log("this is from shopping cart", cartChanges);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3011/beers/")
  //       .then((res) => setBeers(res.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  const removeHandler = (id) => {
    const updatedList = cartChanges.filter((beer) => beer.id !== id);
    changeHandler({
      cartChanges: updatedList,
    });
    console.log("this is delete", cartChanges);
  };

  return (
    <section className={classes.shopping_cart}>
      <h2>Your cart</h2>
      {cartChanges.map((beer) => (
        <CardCart
          key={beer.id}
          beer={beer}
          amount={beer.amount}
          changeHandler={changeHandler}
          removeHandler={() => removeHandler(beer.id)}
        />
      ))}
      <div className={classes.checkout}>
        <p className={classes.subtotal}>
          Subtotal: <span> €</span>
        </p>
        <p className={classes.tax_text}>
          Tax included and shipping calculated at checkout
        </p>
        <Link to="/checkout" className={classes.checkout_button}>
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default ShoppingCart;
