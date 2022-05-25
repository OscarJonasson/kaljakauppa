import React from "react";
import classes from "./Home.module.css";
import image from "../../assets/images/missy-fant-OMIgwm1i_NY-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <div className={classes.hero_container}>
        <img className={classes.hero_img} src={image} alt="glass of beer" />
        <h1 className={classes.hero_heading}>
          Welcome to Error Squirrel Beer Shop!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          ducimus rerum dolore officiis voluptatum perspiciatis enim animi
          facere, ipsa distinctio expedita. Quae sint ratione cumque corporis
          eveniet voluptatem voluptatum. Deleniti.
        </p>
      </div>
    </div>
  );
};

export default Home;
