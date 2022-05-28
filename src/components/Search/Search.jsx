import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Search.module.css";

const Search = () => {
  const [beers, setBeers] = useState([]);
  // const [badSearch, setBadSearch] = useState(false);
  // const [accepted, setAccepted] = useState([]);
  let { search } = useParams();

  search = search.toLowerCase().split(" ");

  useEffect(() => {
    axios
      .get("http://localhost:3011/beers/")
      .then(res => setBeers(res.data))
      .catch(error => console.log(error));
  }, []);

  const special = (beers, selection) => {
    return beers
      .filter(beer => {
        return beer.beer_name
          .toLowerCase()
          .split(" ")
          .some(beer => {
            return selection.includes(beer);
          });
      })
      .map(beer => {
        console.log(beer.id);
        return (
          <Link key={beer.id} to={`/beers/${beer.id}`}>
            <CardGallery key={beer.id} beer={beer} />
          </Link>
        );
      });
  };
  return (
    <section className={classes.beerGallery}>
      {special(beers, search)}
      {/* {badSearch && <div>hello</div>} */}
    </section>
  );
};

export default Search;
