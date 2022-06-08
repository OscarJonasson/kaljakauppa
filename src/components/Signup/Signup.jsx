import React from "react";
import { useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const changeHandler = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const passwordHandler = () => {
    const pass = document.querySelector("#pass");
    const pass2 = document.querySelector("#pass2");
    if (pass2.value !== pass.value) {
      pass2.setCustomValidity("Passwords do not match");
    } else {
      pass2.setCustomValidity("");
    }
  };

  const usernameHandler = () => {
    const username = signupData.email.toLowerCase().split("@");
    return username[0];
  };

  return (
    <div className={classes.signupPage}>
      <form
        action={`/account/${usernameHandler()}`}
        className={classes.signupForm}
      >
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
            id="pass"
            className={classes.inputs}
            placeholder="Create Password"
            required
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password2"
            id="pass2"
            className={classes.inputs}
            placeholder="Confirm Password"
            required
            onChange={changeHandler}
          />
          <button onClick={passwordHandler} className={classes.signupBtn}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
