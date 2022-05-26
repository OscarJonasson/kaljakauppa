import React from "react";
import oops from "../../../src/assets/images/oops1.png";
import classes from "./Fourzerofour.module.css";

const Fourzerofour = () => {
  return (
    <section className={classes.woops}>
      <h2>Oh no, it looks like that page doesn't exist!</h2>
      <img className={classes.ohno} src={oops} alt="oops" />
    </section>
  );
};

export default Fourzerofour;
