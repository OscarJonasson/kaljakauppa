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
        <p>{beer.beer_name}</p>
        <p>{beer.price} €</p>
        <p>{beer.beer_style}</p>
        <p>{beer.beer_abv}</p>
      </div>
    </div>
  );
}

export default CardCart;
