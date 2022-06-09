import classes from "./ContactUs.module.css";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const inputHandler = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    axios
      // .post("http://localhost:3011/contactUs", contactData)
      .post("http://kaljakauppa.herokuapp.com/contactUs/", contactData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={inputHandler}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={inputHandler}
        ></input>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={inputHandler}
        ></textarea>
        <button className={classes.form_btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
