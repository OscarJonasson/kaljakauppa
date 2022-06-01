import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./Beer.module.css";
import axios from "axios";

const Beer = ({ cartChanges, changeHandler }) => {
  const [b, setB] = useState([]);
  const [amount, setAmount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    axios
      // .get(`http://localhost:3011/beers/${id}`)
      .get(`https://kaljakauppa-json.herokuapp.com/beers/${id}`)
      .then(res => setB(res.data))
      .catch(err => console.log(err));
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
            <li>Price: {b.price} €</li>
          </ul>
          <div className={classes.controls}>
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
            <button
              onClick={() => changeHandler(b, amount)}
              className={classes.controls_btn}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beer;
