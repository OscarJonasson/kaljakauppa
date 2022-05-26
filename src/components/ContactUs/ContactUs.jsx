import classes from './ContactUs.module.css';
const ContactUs = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email"></input>
        <label htmlFor="message">Message</label>
        <textarea id="message" cols={50}></textarea>
        <button className={classes.form_btn} onSubmit={''}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
