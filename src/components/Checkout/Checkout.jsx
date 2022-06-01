import classes from "./Checkout.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShippingDetails from "./ShippingDetails";
import BillingDetails from "./BillingDetails";
import Payment from "./Payment";
import TheEnd from "./TheEnd";

const Checkout = () => {
  const [countries, setCountry] = useState([]);
  const [total, setTotal] = useState(34);
  const [step, setStep] = useState(1);
  const [inputData, setInputData] = useState({
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
    console.log(inputData);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      console.log(res);
      setCountry(res.data);
    });
    console.log(countries);
  }, []);

  const useSwitch = () => {
    console.log(step);
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
            changer={changeHandler}
            inputData={inputData}
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
  console.log(step);
  return (
    <section className={classes.checkoutSection}>
      <h2>Checkout</h2>
      <div className={classes.checkoutArea}>
        <div className={classes.formArea}>{useSwitch()}</div>
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
