import React from "react";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";

const Payment = ({ prev, next, changer }) => {
  return (
    <form className={classes.infoForm} onChange={changer}>
      <div className={classes.titleDiv}>
        <h3>Payment Details</h3>
        <p className={classes.alreadyAccount}>
          Already have an account? <Link to="/">Sign in!</Link>
        </p>
      </div>
      <div>
        Choose your method of payment:
        <div className={classes.surpriseDiv}>
          <p className={classes.surprises}>
            <button className={classes.surpriseButton}>
              <i class="fa-brands fa-cc-paypal fa-5x"></i>
            </button>

            <button className={classes.surpriseButton}>
              <i class="fa-brands fa-cc-amex fa-5x"></i>
            </button>
          </p>
          <p className={classes.surprises}>
            <button className={classes.surpriseButton}>
              <i class="fa-brands fa-cc-visa fa-5x"></i>
            </button>

            <button className={classes.surpriseButton}>
              <i class="fa-brands fa-cc-mastercard fa-5x"></i>
            </button>
          </p>
        </div>
      </div>

      <button className={classes.prevButton} onClick={prev}>
        <i class="fa-solid fa-angles-left"></i> Go Back
      </button>
    </form>
  );
};

export default Payment;
