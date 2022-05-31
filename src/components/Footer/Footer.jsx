import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <ul className={classes.aboutUs}>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/joinus">Join Us</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className={classes.cookiePolicy}>
            <li>
              <Link to="/404">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/404">Shipping</Link>
            </li>
            <li>
              <Link to="/404">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/404">Payment Policy</Link>
            </li>
          </ul>
        </section>
        <section>
          <ul className={classes.followUs}>
            <li>Follow Us</li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>{" "}
              <a href="https://www.instagram.com" target="_blank">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>{" "}
              <a href="https://www.tiktok.com" target="_blank">
                <i className="fa-brands fa-tiktok fa-2x"></i>
              </a>{" "}
              <a href="https://www.twitter.com" target="_blank">
                <i className="fa-brands fa-twitter fa-2x"></i>
              </a>
            </li>
          </ul>
          <ul className={classes.weAccept}>
            <li>We Accept</li>
            <li>
              <i className="fa-brands fa-cc-mastercard fa-2x"></i>{" "}
              <i className="fa-brands fa-cc-visa fa-2x"></i>{" "}
              <i className="fa-brands fa-cc-amex fa-2x"></i>
              <i class="fa-brands fa-cc-paypal fa-2x"></i>
            </li>
          </ul>
        </section>
      </div>
      <p>©️ Jenna, Mikke, Oscar</p>
    </footer>
  );
};

export default Footer;
