import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Join Us</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>Cookie Policy</li>
          <li>Shipping</li>
          <li>Terms & Conditions</li>
        </ul>
      </section>
      <section>
        <ul>
          <li>Follow Us</li>
          <li></li>
        </ul>
      </section>
      <p>©️ Jenna, Mikke, Oscar</p>
    </footer>
  );
};

export default Footer;
