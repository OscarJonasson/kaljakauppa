import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <ul className="aboutUs">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Join Us</li>
          </ul>
        </section>
        <section>
          <ul className="cookiePolicy">
            <li>Cookie Policy</li>
            <li>Shipping</li>
            <li>Terms & Conditions</li>
          </ul>
        </section>
        <section>
          <ul>
            <li className="followUs">Follow Us</li>
            <li>
              <i class="fa-brands fa-facebook"></i>{" "}
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-tiktok"></i>{" "}
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className="weAccept">We Accept</li>
            <li>
              <i class="fa-brands fa-cc-mastercard"></i>{" "}
              <i class="fa-brands fa-cc-visa"></i>
            </li>
            <li>
              <i class="fa-brands fa-cc-amex"></i>
            </li>
          </ul>
        </section>
      </div>
      <p>©️ Jenna, Mikke, Oscar</p>
    </footer>
  );
};

export default Footer;
