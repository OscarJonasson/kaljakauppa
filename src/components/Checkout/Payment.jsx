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
      <p className={classes.checkboxArea}>
        <input type="checkbox" />
        <label>Use shipping address</label>
      </p>
      <div className={classes.nameArea}>
        <input
          type="text"
          name="firstname"
          className={classes.doubleInput1}
          placeholder="First Name"
          required
        ></input>
        <input
          type="text"
          name="lastname"
          className={classes.doubleInput2}
          placeholder="Last Name"
          required
        ></input>
      </div>
      <input
        type="text"
        name="address"
        className={classes.singleInput}
        placeholder="Address"
        required
      ></input>
      <input
        type="text"
        name="extraaddress"
        className={classes.singleInput}
        placeholder="Apartment, suite, etc."
      ></input>
      <input
        type="text"
        name="city"
        className={classes.singleInput}
        placeholder="City"
        required
      ></input>
      <div className={classes.countryZIPdiv}>
        <select
          type="text"
          name="country"
          className={classes.selectInput}
          required
        >
          <option selected disabled hidden>
            Country
          </option>
          {countries.map((country) => (
            <option key={country.name}>{country.name}</option>
          ))}
        </select>
        <input
          type="text"
          name="postcode"
          className={classes.doubleInput2}
          placeholder="Postal Code"
          required
        ></input>
      </div>
      <input
        type="tel"
        name="phone"
        className={classes.singleInput}
        placeholder="Phone"
      ></input>
      <button className={classes.prevButton} onClick={prev}>
        <i class="fa-solid fa-angles-left"></i> Go Back
      </button>
    </form>
  );
};

export default Payment;
