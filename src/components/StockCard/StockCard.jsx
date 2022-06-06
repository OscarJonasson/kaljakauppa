import classes from "./StockCard.module.css";
import axios from "axios";
import { useState } from "react";

const StockCard = ({ beer }) => {
  const [inventoryData, setInventoryData] = useState({
    // id: beer.id,
    stock: beer.stock,
    price: beer.price,
  });

  const changeHandler = (e) => {
    if (e.target.name === "price") {
      setInventoryData({
        ...inventoryData,
        [e.target.name]: parseFloat(e.target.value),
      });
      console.log(inventoryData);
    } else {
      setInventoryData({
        ...inventoryData,
        [e.target.name]: parseInt(e.target.value),
      });
      console.log(inventoryData);
    }
  };
  const submitHandler = () => {
    // axios.patch(`http://localhost:3011/beers/${beer.id}`, inventoryData);
    axios.patch(
      `https://kaljakauppa.herokuapp.com/beers/${beer.id}`,
      inventoryData
    );
  };
  return (
    <form
      key={beer.id}
      className={
        beer.stock >= 12
          ? classes.stock
          : beer.stock > 0 && beer.stock < 12
          ? classes.stockLow
          : beer.stock === 0
          ? classes.stockOut
          : classes.stockUFO
      }
      onSubmit={submitHandler}
    >
      <div>{beer.beer_name}</div>
      <label htmlFor={`stock${beer.id}`}>Stock</label>
      <input
        className={classes.stockInputs}
        type="number"
        defaultValue={beer.stock}
        name="stock"
        id={`stock${beer.id}`}
        onChange={changeHandler}
      />
      <label htmlFor={`price${beer.id}`}>Price</label>
      <input
        className={classes.stockInputs}
        type="number"
        defaultValue={beer.price}
        name="price"
        id={`price${beer.id}`}
        onChange={changeHandler}
        step=".01"
      />
      <input
        className={classes.stockInputs}
        type="number"
        defaultValue={beer.id}
        hidden
        name="id"
      />
      <button type="submit" className={classes.stock_btn}>
        Send
      </button>
    </form>
  );
};

export default StockCard;
