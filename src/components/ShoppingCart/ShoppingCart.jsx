// import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardCart from "../CardCart/CardCart";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = ({
  cartChanges,
  changeHandler,
  setCartChanges,
  beersPrice,
}) => {
  const removeHandler = (id) => {
    const updatedList = cartChanges.filter((beer) => {
      return beer.id !== id;
    });
    setCartChanges(updatedList);
    // console.log("this is delete", cartChanges);
  };

  // const beersTotal = Number(beersPrice).toFixed(2);
  const subTotal = () => {
    return Number(beersPrice).toFixed(2);
  };

  const emptyCart = () => {
    localStorage.clear();
    window.location.reload();
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
        <p className={classes.subtotal}>Subtotal: {subTotal()} €</p>
        <p className={classes.tax_text}>
          Tax included and shipping calculated at checkout
        </p>
        <Link to="/checkout" className={classes.checkout_button}>
          Checkout
        </Link>
      </div>
      <button className={classes.emptyCart} onClick={emptyCart}>
        Empty Cart
      </button>
    </section>
  );
};

export default ShoppingCart;
