import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      {beers.map((beer) => (
        <div key={beer.bid} className="galleryCard">
          <Link to={`/beers/${beer.beer_name}`}>
            <img
              className="galleryImage"
              src={beer.beer_label}
              alt={beer.beer_name}
            />
          </Link>
          <div className="galleryInfo">
            <h2>{beer.beer_name}</h2>
            <p>{beer.price}</p>
            <Link to={`/beers/${beer.beer_name}`}>See more</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Beers;
