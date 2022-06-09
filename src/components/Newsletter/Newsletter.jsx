import React from "react";
import classes from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={classes.newsletterSection}>
      <h2 className={classes.newsletterHeader}>Join our newsletter!</h2>
      <p className={classes.newsletterText}>
        Get the latest news on new products, specials, giveaways, and more! We
        even give our newsletter subscribers access to special deals before
        anyone else. So what are you waiting for? Sign up now!
      </p>
      <form className={classes.newsletterForm}>
        <div>
          <label className={classes.emailLabel} htmlFor="email">
            Email
          </label>
          <input className={classes.emailInput} type="email" id="email"></input>
        </div>
        <div>
          <button className={classes.sendButton}>Sign me up!</button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
