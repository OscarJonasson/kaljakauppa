import classes from "./CardHome.module.css";

function CardHome(props) {
  console.log(props);
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={props.beer.beer_label}
        alt={`${props.beer.beer_name}`}
      />
      <div className={classes.card_desc}>
        <p>{props.beer.beer_name}</p>
        <p>{props.beer.price} EUR</p>
      </div>
      <div className={classes.info}>
        <ul className={classes.info_list}>
          <li>Style: {props.beer.beer_style}</li>
          <li>{props.beer.brewery.brewery_name}</li>
          <li>{props.beer.brewery.country_name}</li>
          <li>ABV: {props.beer.beer_abv} %</li>
        </ul>
      </div>
    </div>
  );
}

export default CardHome;
