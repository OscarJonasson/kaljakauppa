import React from "react";
import classes from "./Join.module.css";

const Join = () => {
  return (
    <section className={classes.joinSection}>
      <h2 className={classes.joinHeader}>
        Could you be the next Error Squirrel team member?
      </h2>
      <p className={classes.joinText}>
        We'll post job openings here, so check back every now and then and see
        what we have available.
      </p>
      <div>
        <ul>
          <li>No openings right now!</li>
        </ul>
      </div>
    </section>
  );
};

export default Join;
