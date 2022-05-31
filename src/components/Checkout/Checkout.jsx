import classes from "./Checkout.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [countries, setCountry] = useState([]);
  const [total, setTotal] = useState(34);
  const [inputData, setInputData] = useState({
    step: 1,
    firstname: "",
    lastname: "",
    address: "",
    extraaddress: "",
    city: "",
    country: "",
    postcode: "",
    phone: "",
  });

  const tax = 1.24;

  const calc = () => {
    const sum = total - total / tax;
    return sum.toFixed(2);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      console.log(res);
      setCountry(res.data);
    });
    console.log(countries);
  }, []);

  return (
    <section className={classes.checkoutSection}>
      <h2>Checkout</h2>
      <div className={classes.checkoutArea}>
        <div className={classes.billingArea}>
          <form className={classes.infoForm}>
            <div className={classes.titleDiv}>
              <h3>Billing Address</h3>
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

            <button className={classes.checkoutButton} onSubmit={""}>
              Continue to Shipping and Payment{" "}
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </form>
        </div>
        <div className={classes.cartDiv}>
          <h3>Your cart</h3>
          <div className={classes.cartArea}>
            <ul>
              <li>item imported from cart</li>
              <li>item imported from cart</li>
              <li>item imported from cart</li>
              <li>item imported from cart</li>
            </ul>
          </div>
          <p>Total: {total.toFixed(2)} €</p>
          <p>VAT: {calc()} €</p>
          <p>Shipping: - </p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
