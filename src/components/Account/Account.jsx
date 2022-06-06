import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Account.module.css";

const Account = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <form className={classes.accountForm}>
        <h3>Sign Up</h3>
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
          type="email"
          name="email"
          className={classes.singleInput}
          placeholder="Email address"
          required
        />
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
          required
        />
        <input
          type="text"
          name="city"
          className={classes.singleInput}
          placeholder="City"
          required
        />
        <div>
          <select
            typeof="text"
            name="country"
            className={classes.countrySelect}
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
        <button className={classes.signup_btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default Account;
