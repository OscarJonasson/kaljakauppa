import classes from "./Checkout.module.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShippingDetails from "./ShippingDetails";
import BillingDetails from "./BillingDetails";
import Payment from "./Payment";
import TheEnd from "./TheEnd";

const Checkout = ({ shoppingcart }) => {
  const [countries, setCountry] = useState([]);
  const [total, setTotal] = useState(20);
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

  // const totalAmount = () => {
  //   shoppingcart
  //     .map((cart) => cart.amount)
  //     .reduce((carttotal, cart) => cart + carttotal);
  // };

  // const carttotal = 0;

  // const totalAmount = (shoppingcart) => {
  //   carttotal = shoppingcart.price.reduce((prev, current) => prev + current, 0);
  //   return carttotal;
  // };

  console.log(shoppingcart);

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
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      console.log(res);
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

  const shippingPrice = () => {
    if (inputData.country === "") {
      return " - ";
    } else if (inputData.country === "Finland") {
      return 6.99;
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
                <Link className={classes.cartInfo} to={`/beers/${cart.id}`}>
                  <li>
                    {cart.beer_name}{" "}
                    <i className="fa-solid fa-angles-right"></i> Amount:{" "}
                    {cart.amount} <i className="fa-solid fa-angles-right"></i>{" "}
                    {cart.price}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <p>Total: {total} €</p>
          <p>VAT: {calc()} €</p>
          <p>Shipping: {shippingPrice()} €</p>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
