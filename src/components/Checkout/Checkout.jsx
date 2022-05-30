import classes from "./Checkout.module.css";
import React from "react";

const Checkout = () => {
  return (
    <section className={classes.cartSection}>
      <h2>Your cart</h2>
      <div className={classes.cartArea}>
        <ul>
          <li>Filler text</li>
        </ul>
      </div>
    </section>
  );
};

export default Checkout;
