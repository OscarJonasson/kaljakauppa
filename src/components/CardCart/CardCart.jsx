import classes from "./CardCart.module.css";

function CardCart({ beer }) {
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={beer.beer_label}
        alt={`${beer.beer_name}`}
      />
      <div className={classes.card_desc}>
        <h3>{beer.beer_name}</h3>
        <p>{beer.price} €</p>
        <p>{beer.beer_style}</p>
        <p>{beer.beer_abv} %</p>
        <p>Stock: {beer.stock}</p>
      </div>
      <div className={classes.quantity}>
        <p>Quantity:</p>
        <input
          type="number"
          className={classes.quantity_input}
          name="quantity"
        />
      </div>
      <div className={classes.total}>
        <p>Total:</p>
        <p>{beer.price} €</p>
      </div>
    </div>
  );
}

export default CardCart;
