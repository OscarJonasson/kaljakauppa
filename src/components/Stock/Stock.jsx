import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Stock.module.css";

const Stock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa-json.herokuapp.com/beers")
      .then((res) => setStock(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className={classes.container}>
      <ul className={classes.linkStats}>
        <li>
          <Link to="">Stock</Link>
        </li>
        <li>
          <Link to="stats">Stats</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
      </ul>

      <div className={classes.stock}>
        {stock.map((beer) => {
          console.log(beer);
          return <div>{beer.name}</div>;
        })}
      </div>
    </section>
  );
};

export default Stock;
