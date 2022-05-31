import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import axios from "axios";
import CardHome from "../CardHome/CardHome";
import image from "../../assets/images/missy-fant-OMIgwm1i_NY-unsplash.jpg";
import VerifyAge from "../VerifyAge/VerifyAge";

const Home = () => {
  const [beers, setBeers] = useState([]);
  // Set this to false if you want to test the modal window
  const [ageCheck, setAgeCheck] = useState(true);

  const checkAge = () => {
    setAgeCheck(true);
  };

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers")
      .get("https://kaljakauppa-json.herokuapp.com/beers")
      .then(res => setBeers(res.data))
      .catch(err => console.log(err));
  }, []);

  const selection = [6, 2, 8];
  const special = (beers, selection) => {
    return beers
      .filter(beer => {
        return selection.includes(beer.id);
      })
      .map(beer => {
        return (
          <Link to={`beers/${beer.id}`}>
            <CardHome key={beer.id} beer={beer} />
          </Link>
        );
      });
  };

  return (
    <div>
      {!ageCheck && <VerifyAge check={checkAge} />}
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
      <section className={classes.specials}>
        {special(beers, selection)}
      </section>
    </div>
  );
};

export default Home;
