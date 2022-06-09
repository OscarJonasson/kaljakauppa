import classes from "./Checkout.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShippingDetails from "./ShippingDetails";
import BillingDetails from "./BillingDetails";
import Payment from "./Payment";
import TheEnd from "./TheEnd";

const Checkout = ({ shoppingcart, beersPrice }) => {
  const [countries, setCountry] = useState([]);
  const [step, setStep] = useState(1);
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    extraaddress: "",
    city: "",
    country: "",
    postcode: "",
    phone: "",
  });

  const [billingData, setBillingData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    extraaddress: "",
    city: "",
    country: "",
    postcode: "",
    phone: "",
  });

  const tax = 1.24;

  const calc = () => {
    const sum = beersPrice - beersPrice / tax;
    return sum.toFixed(2);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const billingChangeHandler = (e) => {
    setBillingData({
      ...billingData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountry(res.data);
    });
  }, []);

  const useSwitch = () => {
    switch (step) {
      case 1:
        return (
          <ShippingDetails
            next={next}
            countries={countries}
            changer={changeHandler}
            inputData={inputData}
          />
        );
      case 2:
        return (
          <BillingDetails
            next={next}
            prev={back}
            countries={countries}
            changer={billingChangeHandler}
            inputData={inputData}
            billingData={billingData}
          />
        );
      case 3:
        return <Payment prev={back} next={next} changer={changeHandler} />;
      case 4:
        return <TheEnd />;
      default:
        return null;
    }
  };

  const shippingPrice = () => {
    if (inputData.country === "") {
      return " ";
    } else if (inputData.country === "Finland") {
      return Number(6.99);
    } else if (inputData.country === "Estonia") {
      return 9.99;
    } else if (
      inputData.country === "Sweden" ||
      inputData.country === "Norway"
    ) {
      return 12.99;
    } else {
      return 19.99;
    }
  };

  const beersTotal = beersPrice + shippingPrice();

  return (
    <section className={classes.checkoutSection}>
      <h2>Checkout</h2>
      <div className={classes.checkoutArea}>
        <div className={classes.formArea}>{useSwitch()}</div>
        <div className={classes.cartDiv}>
          <h3>Your cart</h3>
          <div className={classes.cartArea}>
            <ul>
              {shoppingcart.map((cart) => (
                <Link
                  key={cart.id}
                  className={classes.cartInfo}
                  to={`/beers/${cart.id}`}
                >
                  <li>
                    {cart.beer_name} 🍺 Amount: {cart.amount} 🍺{" "}
                    {Number(cart.price * cart.amount).toFixed(2)} €
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <p>Total: {Number(beersTotal).toFixed(2)} €</p>
          <p>VAT: {calc()} €</p>
          <p>Shipping: {shippingPrice()} €</p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
