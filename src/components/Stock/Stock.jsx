import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Stock.module.css";

const Stock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa.herokuapp.com/beers")
      .then((res) => setStock(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className={classes.container}>
      <ul className={classes.links}>
        <Link to="">
          <li>Stock</li>
        </Link>
        <Link to="stats">
          <li>Stats</li>
        </Link>
        <Link to="orders">
          <li>Orders</li>
        </Link>
      </ul>

      {stock.map((beer) => {
        console.log(beer);
        return (
          <form className={classes.stock}>
            <div>{beer.beer_name}</div>
            <input type="text" value={beer.stock} />
            <input type="number" value={beer.price} />
          </form>
        );
      })}
    </section>
  );
};

export default Stock;
