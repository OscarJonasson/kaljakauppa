import React from 'react';
import classes from './Home.module.css';
import image from '../../assets/images/engin-akyurt-3ORoQEJY9LA-unsplash.jpg';

const Home = () => {
  return (
    <div>
      <div className={classes.hero_container}>
        <img className={classes.hero_img} src={image} alt="glass of beer" />
        <h1 className={classes.hero_heading}>
          Welcome to Error Squirrel Beer Shop!
        </h1>
      </div>
    </div>
  );
};

export default Home;
