import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import axios from "axios";
import image from "../../assets/images/alban-martel-nhX8QhXMBkM-unsplash.jpg";
import VerifyAge from "../VerifyAge/VerifyAge";
import FakeCarousel from "../FakeCarousel/FakeCarousel";

const Home = ({ ageCheck, checkAge }) => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers")
      .get("https://kaljakauppa.herokuapp.com/beers")
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const selection = [6, 2, 8, 3, 1];
  const special = (beers, selection) => {
    return beers
      .filter((beer) => {
        return selection.includes(beer.id);
      })
      .map((beer) => {
        console.log();
        return (
          <Link
            key={beer.id}
            to={`search/${beer.brewery.brewery_name.split(" ").join("-")}`}
          >
            <FakeCarousel key={beer.id} beer={beer} />
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
      <section className={classes.logoSection}>
        <h3>Check out the beers from these breweries!</h3>
        <div className={classes.logoDiv}>{special(beers, selection)}</div>
      </section>
    </div>
  );
};

export default Home;
