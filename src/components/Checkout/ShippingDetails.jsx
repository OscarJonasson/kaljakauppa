import React from "react";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";

const ShippingDetails = ({ next, changer, countries, inputData }) => {
  return (
    <form className={classes.infoForm} onSubmit={next}>
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
          onChange={changer}
          value={inputData.firstname ? inputData.firstname : ""}
        />
        <input
          type="text"
          name="lastname"
          className={classes.doubleInput2}
          placeholder="Last Name"
          required
          onChange={changer}
          value={inputData.lastname ? inputData.lastname : ""}
        />
      </div>
      <input
        type="text"
        name="address"
        className={classes.singleInput}
        placeholder="Address"
        required
        onChange={changer}
        value={inputData.address ? inputData.address : ""}
      />
      <input
        type="text"
        name="extraaddress"
        className={classes.singleInput}
        placeholder="Apartment, suite, etc."
        onChange={changer}
        value={inputData.extraaddress ? inputData.extraaddress : ""}
      />
      <input
        type="text"
        name="city"
        className={classes.singleInput}
        placeholder="City"
        required
        onChange={changer}
        value={inputData.city ? inputData.city : ""}
      />
      <div className={classes.countryZIPdiv}>
        <select
          type="text"
          name="country"
          className={classes.selectInput}
          required
          onChange={changer}
          value={inputData.country ? inputData.country : "Country"}
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
          onChange={changer}
          value={inputData.postcode ? inputData.postcode : ""}
        />
      </div>
      <input
        type="tel"
        name="phone"
        className={classes.singleInput}
        placeholder="Phone"
        onChange={changer}
        value={inputData.phone ? inputData.phone : ""}
      />
      <button className={classes.nextButton} onSubmit={changer}>
        Continue to Billing <i className="fa-solid fa-angles-right"></i>
      </button>
    </form>
  );
};

export default ShippingDetails;
