import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.loginPage}>
      <form className={classes.loginForm}>
        <div className={classes.login}>
          <h3>Login</h3>
          <input
            type="email"
            className={classes.inputs}
            placeholder="Email address"
            required
          />
          <input
            type="password"
            className={classes.inputs}
            placeholder="Password"
            required
          />
          <button className={classes.login_btn}>Login</button>
        </div>
      </form>
      <div className={classes.signUp}>
        <h3>Don't have an account yet?</h3>
        <Link to="/account">
          <button className={classes.signUp_btn}>Sign Up Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
