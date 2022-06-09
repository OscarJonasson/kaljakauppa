import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";
import axios from "axios";

const Payment = ({ prev, next, changer }) => {
  const storedCart = JSON.parse(localStorage.getItem("cartData"));

  const sendOrderHandler = (e) => {
    e.preventDefault();
    let items = [];
    storedCart.map((item) => {
      let oneItem = {
        id: item.id,
        beer_name: item.beer_name,
        amount: item.amount,
      };
      return (items = [...items, oneItem]);
    });
    const ready = { products: items };

    axios.post("http://localhost:3011/orders", ready);
    localStorage.clear();
    next(e);
  };

  return (
    <form className={classes.infoForm} onChange={changer}>
      <div className={classes.titleDiv}>
        <h3>Payment Details</h3>
        <p className={classes.alreadyAccount}>
          Already have an account? <Link to="/">Sign in!</Link>
        </p>
      </div>
      <div>
        Choose your method of payment:
        <div className={classes.surpriseDiv}>
          <p className={classes.surprises}>
            <button
              className={classes.surpriseButton}
              onClick={sendOrderHandler}
            >
              <i className="fa-brands fa-cc-paypal fa-5x"></i>
            </button>

            <button
              className={classes.surpriseButton}
              onClick={sendOrderHandler}
            >
              <i className="fa-brands fa-cc-amex fa-5x"></i>
            </button>
          </p>
          <p className={classes.surprises}>
            <button
              className={classes.surpriseButton}
              onClick={sendOrderHandler}
            >
              <i className="fa-brands fa-cc-visa fa-5x"></i>
            </button>

            <button
              className={classes.surpriseButton}
              onClick={sendOrderHandler}
            >
              <i className="fa-brands fa-cc-mastercard fa-5x"></i>
            </button>
          </p>
        </div>
      </div>

      <button className={classes.prevButton} onClick={prev}>
        <i className="fa-solid fa-angles-left"></i> Go Back
      </button>
    </form>
  );
};

export default Payment;
