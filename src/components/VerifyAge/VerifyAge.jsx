import classes from "./VerifyAge.module.css";
import { Link } from "react-router-dom";
const VerifyAge = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.verify_box}>
        <h2 className={classes.verify_heading}>Welcome to our shop!</h2>
        <p className={classes.verify_legaltext}>
          Before you can enter, please verify that you are over 18 years old.
        </p>
        <div className={classes.verify_buttons}>
          <button
            className={`${classes.verify_btn} ${classes.green}`}
            onClick={props.check}
          >
            Yes, let's boogie!
          </button>
          <Link
            to="/search/nonalcoholic"
            className={`${classes.verify_btn} ${classes.red}`}
          >
            Nope, not yet!
          </Link>
        </div>
        <p>
          *Site is for training purposes only. All inputted data is saved on a
          public server.
        </p>
      </div>
    </div>
  );
};

export default VerifyAge;
