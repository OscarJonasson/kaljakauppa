import React from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={classes.signupPage}>
      <form className={classes.signupForm}>
        <div className={classes.signup}>
          <h3>Sign Up</h3>
          <input
            type="email"
            className={classes.inputs}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className={classes.inputs}
            placeholder="Create Password"
            required
          />
          <input
            type="password"
            className={classes.inputs}
            placeholder="Confirm Password"
            required
          />
          <Link to="/signup/:account">
            <button className={classes.signupBtn}>Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
