import React from "react";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";

const BillingDetails = ({ next, prev, changer, countries }) => {
  return (
    <form className={classes.infoForm} onChange={changer}>
      <div className={classes.titleDiv}>
        <h3>Billing Address</h3>
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
        ></input>
        <input
          type="text"
          name="lastname"
          className={classes.doubleInput2}
          placeholder="Last Name"
        ></input>
      </div>
      <input
        type="text"
        name="address"
        className={classes.singleInput}
        placeholder="Address"
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
      ></input>
      <div className={classes.countryZIPdiv}>
        <select type="text" name="country" className={classes.selectInput}>
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
        ></input>
      </div>
      <input
        type="tel"
        name="phone"
        className={classes.singleInput}
        placeholder="Phone"
      ></input>
      <p className={classes.buttons}>
        <button className={classes.prevButton} onClick={prev}>
          <i class="fa-solid fa-angles-left"></i> Go Back
        </button>
        <button className={classes.nextButton} onClick={next}>
          Continue to Payment <i className="fa-solid fa-angles-right"></i>
        </button>
      </p>
    </form>
  );
};

export default BillingDetails;
