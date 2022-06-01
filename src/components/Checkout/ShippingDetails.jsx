import React from "react";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";

const ShippingDetails = ({ next, changer, countries }) => {
  return (
    <form className={classes.infoForm} onChange={changer}>
      <div className={classes.titleDiv}>
        <h3>Shipping Address</h3>
        <p className={classes.alreadyAccount}>
          Already have an account? <Link to="/">Sign in!</Link>
        </p>
      </div>
      <div className={classes.nameArea}>
        <input
          type="text"
          name="firstname"
          className={classes.doubleInput1}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastname"
          className={classes.doubleInput2}
          placeholder="Last Name"
          required
        />
      </div>
      <input
        type="text"
        name="address"
        className={classes.singleInput}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="extraaddress"
        className={classes.singleInput}
        placeholder="Apartment, suite, etc."
      />
      <input
        type="text"
        name="city"
        className={classes.singleInput}
        placeholder="City"
        required
      />
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
        />
      </div>
      <input
        type="tel"
        name="phone"
        className={classes.singleInput}
        placeholder="Phone"
      />
      <button className={classes.nextButton} onClick={next}>
        Continue to Billing <i className="fa-solid fa-angles-right"></i>
      </button>
    </form>
  );
};

export default ShippingDetails;
