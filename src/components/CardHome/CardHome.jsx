import classes from './CardHome.module.css';

function CardHome(props) {
  return (
    <div className={classes.card}>
      <img
        className={classes.card_img}
        src={props.image}
        alt={`${props.name}`}
      />
      <div className={classes.card_desc}>
        <p>{props.name}</p>
        <p>{props.price} EUR</p>
      </div>
      <div className={classes.info}>
        <ul className={classes.info_list}>
          <li>Style: {props.style}</li>
          <li>{props.brewery}</li>
          <li>{props.country}</li>
          <li>ABV: {props.abv} %</li>
        </ul>
      </div>
    </div>
  );
}

export default CardHome;
