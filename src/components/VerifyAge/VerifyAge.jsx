import classes from "./VerifyAge.module.css";
const VerifyAge = () => {
  return (
    <div className={classes.container}>
      <div className={classes.verify_box}>
        <h2 className={classes.verify_heading}>Welcome to our shop!</h2>
        <p className={classes.verify_legaltext}>
          Before you can enter, please verify that you are over 18 years old.
        </p>
        <div className={classes.verify_buttons}>
          <button className={`${classes.verify_btn} ${classes.green}`}>
            Yes, let's boogie!
          </button>
          <button className={`${classes.verify_btn} ${classes.red}`}>
            Nope, not yet!
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAge;
