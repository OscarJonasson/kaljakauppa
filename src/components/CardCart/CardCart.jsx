import { Link } from "react-router-dom";
import classes from "./CardCart.module.css";

function CardCart({ beer, amount, changeHandler, removeHandler }) {
  const total = () => {
    const multi = amount * beer.price;
    return multi.toFixed(2);
  };

  // const stockLimiter = (amount, stock) => {
  //   if (amount > stock) {
  //     return amount === beer.stock;
  //   } else if (amount <= 0) {
  //     return amount === 1;
  //   }
  // };

  return (
    <div className={classes.card}>
      <Link to={`/beers/${beer.id}`}>
        <img
          className={classes.card_img}
          src={beer.beer_label}
          alt={`${beer.beer_name}`}
        />
      </Link>
      <div className={classes.card_desc}>
        <h3>{beer.beer_name}</h3>
        <p>{beer.price} €</p>
        <p>{beer.beer_style}</p>
        <p>Stock: {beer.stock}</p>
      </div>
      <div className={classes.quantity_and_total}>
        <div className={classes.quantity}>
          <p>Quantity:</p>
          <input
            type="number"
            className={classes.quantity_input}
            name="quantity"
            value={amount}
            onChange={(e) => {
              if (e.target.value > beer.stock) {
                return amount === beer.stock;
              } else if (e.target.value <= 0) {
                return amount === 1;
              }
              changeHandler(beer, e.target.value);
            }}
          />
        </div>
        <div className={classes.total}>
          <p>Total:</p>
          <p>{total()} €</p>
        </div>
      </div>
      <button onClick={removeHandler} className={classes.delete_button}>
        Delete <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default CardCart;
