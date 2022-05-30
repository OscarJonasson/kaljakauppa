import classes from "./CardGallery.module.css";

const CardGallery = ({ beer }) => {
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
        <button className={classes.addtoCart}>Add to Cart</button>
      </div>
      <div className={classes.info}>
        <ul className={classes.info_list}>
          <li>Style: {beer.beer_style}</li>
          <li>{beer.brewery.brewery_name}</li>
          <li>{beer.brewery.country_name}</li>
          <li>ABV: {beer.beer_abv} %</li>
        </ul>
      </div>
    </div>
  );
};

export default CardGallery;
