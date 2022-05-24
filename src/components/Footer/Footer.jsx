import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <ul className={classes.aboutUs}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Join Us</li>
            <li>Newsletter</li>
          </ul>
        </section>
        <section>
          <ul className={classes.cookiePolicy}>
            <li>Cookie Policy</li>
            <li>Shipping</li>
            <li>Terms & Conditions</li>
            <li>Payment Policy</li>
          </ul>
        </section>
        <section>
          <ul className={classes.followUs}>
            <li>Follow Us</li>
            <li>
              <i className="fa-brands fa-facebook fa-2x"></i>{" "}
              <i className="fa-brands fa-instagram fa-2x"></i>{" "}
              <i className="fa-brands fa-tiktok fa-2x"></i>{" "}
              <i className="fa-brands fa-twitter fa-2x"></i>
            </li>
          </ul>
          <ul className={classes.weAccept}>
            <li>We Accept</li>
            <li>
              <i className="fa-brands fa-cc-mastercard fa-2x"></i>{" "}
              <i className="fa-brands fa-cc-visa fa-2x"></i>{" "}
              <i className="fa-brands fa-cc-amex fa-2x"></i>
            </li>
          </ul>
        </section>
      </div>
      <p>©️ Jenna, Mikke, Oscar</p>
    </footer>
  );
};

export default Footer;
