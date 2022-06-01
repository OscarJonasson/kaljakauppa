import classes from "./CardGallery.module.css";
import { Link } from "react-router-dom";

const CardGallery = ({ beer, cartChanges, changeHandler }) => {
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
        <button
          className={
            beer.stock > 0 ? classes.addtoCart : classes.addtoCartNoStock
          }
          onClick={() => changeHandler(beer, 1)}
        >
          {beer.stock > 0 ? "Add to cart" : "Out Of Stock"}
        </button>
      </div>
      <Link className={classes.info} to={`${beer.id}`}>
        <ul className={classes.info_list}>
          <li>Style: {beer.beer_style}</li>
          <li>{beer.brewery.brewery_name}</li>
          <li>{beer.brewery.country_name}</li>
          <li>ABV: {beer.beer_abv} %</li>
        </ul>
      </Link>
    </div>
  );
};

export default CardGallery;
