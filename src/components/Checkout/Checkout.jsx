import classes from "./Checkout.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShippingDetails from "./ShippingDetails";
import BillingDetails from "./BillingDetails";
import Payment from "./Payment";

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

  const nextStep = () => {
    console.log("hallooo");
    setStep(step + 1);
  };

  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
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
            next={nextStep}
            countries={countries}
            changer={changeHandler}
            inputData={inputData}
          />
        );
      case 2:
        return (
          <BillingDetails
            next={nextStep}
            prev={prevStep}
            countries={countries}
            changer={changeHandler}
            inputData={inputData}
          />
        );
      case 3:
        return (
          <Payment prev={prevStep} next={nextStep} changer={changeHandler} />
        );
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
