import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StockCard from "../StockCard/StockCard";
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
    <section className={classes.containerStock}>
      <ul className={classes.links}>
        <Link to="/stock">
          <li>Stock</li>
        </Link>
        <Link to="/404">
          <li>Stats</li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
      </ul>
      <div className={classes.stockCards}>
        {stock.map((beer) => {
          return <StockCard key={beer.id} beer={beer} />;
        })}
      </div>
    </section>
  );
};

export default Stock;
