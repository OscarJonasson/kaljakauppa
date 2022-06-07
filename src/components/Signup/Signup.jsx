import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [nextPage, setNextPage] = useState(1);

  const changeHandler = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    setNextPage(nextPage + 1);
  };

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={classes.signupPage}>
      <form onSubmit={next} className={classes.signupForm}>
        <div className={classes.signup}>
          <h3>Sign Up</h3>
          <input
            type="email"
            name="email"
            className={classes.inputs}
            placeholder="Email Address"
            required
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            className={classes.inputs}
            placeholder="Create Password"
            required
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password2"
            className={classes.inputs}
            placeholder="Confirm Password"
            required
            onChange={changeHandler}
          />
          <Link to="/signup/:account">
            <button onSubmit={changeHandler} className={classes.signupBtn}>
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
