import classes from "./CardCart.module.css";

function CardCart({ beer, amount, changeHandler }) {
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={beer.beer_label}
        alt={`${beer.beer_name}`}
      />
      <div className={classes.card_desc}>
        <h3>{beer.beer_name}</h3>
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
            onChange={changeHandler}
          />
        </div>
        <div className={classes.total}>
          <p>Total:</p>
          <p>{beer.price} €</p>
        </div>
      </div>
      <button className={classes.delete_button}>
        Delete <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default CardCart;
