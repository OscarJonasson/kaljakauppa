import React from "react";
import classes from "./Checkout.module.css";
import squirrel from "../../assets/images/end.webp";

const TheEnd = () => {
  return (
    <div className={classes.endImage}>
      <img className={classes.theSquirrel} src={squirrel} />
    </div>
  );
};

export default TheEnd;
