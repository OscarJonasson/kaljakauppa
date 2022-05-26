import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CardGallery from '../CardGallery/CardGallery';
import classes from './Search.module.css';

const Search = () => {
  const [beers, setBeers] = useState([]);
  const { search } = useParams();

  // console.log(search);

  useEffect(() => {
    axios
      .get('http://localhost:3011/beers/')
      .then(res => setBeers(res.data))
      .catch(error => console.log(error));
  }, []);

  const special = (beers, selection) => {
    return beers
      .filter(beer => {
        // console.log(search);

        return selection
          .toLowerCase()
          .includes(...beer.beer_name.toLowerCase());
      })
      .map(beer => {
        return (
          <Link to={`beers/${beer.id}`}>
            <CardGallery key={beer.id} beer={beer} />
          </Link>
        );
      });
  };

  return (
    <section className={classes.beerGallery}>{special(beers, search)}</section>
  );
};

export default Search;
