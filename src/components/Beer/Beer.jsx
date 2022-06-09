import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./Beer.module.css";
import axios from "axios";

const Beer = ({ changeHandler }) => {
  const [b, setB] = useState([]);
  const [amount, setAmount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3011/beers/${id}`)
      .then((res) => setB(res.data))
      .catch((err) => console.log(err));
  }, []);

  const subOne = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const addOne = () => {
    if (amount < b.stock) {
      setAmount(amount + 1);
    }
  };

  const beerPrice = () => {
    return Number(b.price).toFixed(2);
  };

  return (
    <>
      <ul className={classes.breadcrums}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>{`>`}</li>
        <li>
          <Link to={"/beers"}>Beers</Link>
        </li>
        <li>{`>`}</li>
        <li>{b.beer_name}</li>
      </ul>
      <div className={classes.beer}>
        <div className={classes.beer_left}>
          <img
            className={classes.beer_img}
            src={b.beer_label}
            alt={`${b.beer_name}`}
          />
        </div>
        <div className={classes.beer_right}>
          <h2 className={classes.beer_heading}>{b.beer_name}</h2>
          <p className={classes.beer_description}>{b.beer_description}</p>
          <ul className={classes.beer_info}>
            <li>ABV: {b.beer_abv} %</li>
            <li>Style: {b.beer_style}</li>
            <li>Brewed by: {b.brewery?.brewery_name}</li>
            {b.stock === 0 ? (
              <li className={classes.outOfStock}>Out Of Stock</li>
            ) : (
              <li>Stock: {b.stock}</li>
            )}
            <li>Price: {beerPrice()} €</li>
          </ul>
          <div className={classes.controls}>
            <div>
              <button className={classes.controls_math} onClick={subOne}>
                ➖
              </button>
              <input
                className={classes.controls_amount}
                type="number"
                name="amount"
                value={b.stock === 0 ? 0 : amount}
              />
              <button className={classes.controls_math} onClick={addOne}>
                ➕
              </button>
            </div>
            <button
              onClick={() => changeHandler(b, amount)}
              className={
                b.stock > 0
                  ? classes.controls_btn
                  : classes.controls_btnOutOfStock
              }
            >
              {b.stock > 0 ? "Add To Cart" : "Out Of Stock"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beer;
