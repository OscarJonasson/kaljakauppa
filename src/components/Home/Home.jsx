import React from "react";
import image from "../assets/images/engin-akyurt-3ORoQEJY9LA-unsplash.jpg";

const Home = () => {
  return (
    <div>
      <img className="hero_img" src={image} alt="glass of beer" />
      <div>
        <h1>Welcome to Error Squirrel Beer Shop!</h1>
      </div>
    </div>
  );
};

export default Home;
