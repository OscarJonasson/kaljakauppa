import classes from "./VerifyAge.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

const VerifyAge = ({ check }) => {
  return (
    <div className={classes.container}>
      <div className={classes.verify_box}>
        <h2 className={classes.verify_heading}>Welcome to our shop!</h2>
        <p className={classes.verify_legaltext}>
          Before you can enter, please verify that you are over 18 years old.
        </p>
        <div className={classes.verify_buttons}>
          <button
            className={classNames([classes.verify_btn, classes.green])}
            onClick={check}
          >
            Yes, let's boogie!
          </button>
          <button className={classNames([classes.verify_btn, classes.red])}>
            <Link to="/search/nonalcoholic">Nope, not yet!</Link>
          </button>
        </div>
        <p className={classes.warning}>
          *This site is for training purposes only. All inputted data is saved
          on a public server.
        </p>
      </div>
    </div>
  );
};

export default VerifyAge;
