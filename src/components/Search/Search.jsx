import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Search.module.css";
import squirrel from "../../assets/images/randomsquirrel1.webp";
import Sidebar from "../Sidebar/Sidebar";

const Search = ({ changeHandler }) => {
  const [beers, setBeers] = useState([]);
  const [goodSearch, setGoodSearch] = useState(false);
  let { search } = useParams();
  search = search.toLowerCase().split(" ");

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa.herokuapp.com/beers/")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const special = (beers, selection) => {
    return beers
      .filter((beer) => {
        return beer.beer_slug
          .toLowerCase()
          .split("-")
          .some((beer) => {
            const searchTerms = selection[0].substr(0, 5);
            if (!goodSearch && beer.startsWith(searchTerms)) {
              setGoodSearch(true);
            }
            return beer.startsWith(searchTerms);
          });
      })
      .map((beer) => {
        return (
          <CardGallery
            key={beer.id}
            beer={beer}
            changeHandler={changeHandler}
          />
        );
      });
  };

  const getRandom = () => {
    return Math.floor(Math.random() * beers.length + 1);
  };

  return (
    <>
      <section className={classes.beerGallery}>
        {special(beers, search)}
        {!goodSearch && (
          <section className={classes.badSearch}>
            <h4>
              Unfortunately there were no matches for "{search.join(" ")}"...
              Feel free to give us a <Link to={"/contact"}>suggestion!</Link>
            </h4>
            <Link to={`/beers/${getRandom()}`}>
              <img
                className={classes.luckySquirrel}
                src={squirrel}
                alt="squirrel with beer"
              />
            </Link>
          </section>
        )}
      </section>
      <Sidebar />
    </>
  );
};

export default Search;
