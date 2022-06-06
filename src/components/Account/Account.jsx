import React from "react";
import classes from "./Account.module.css";

const Account = () => {
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default Account;
