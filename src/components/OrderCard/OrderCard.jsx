import classes from "./OrderCard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function OrderCard({ orders }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3011/beers/")
      .get("https://kaljakauppa.herokuapp.com/beers")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const submitHandler = () => {
    orders.products.map((product) => {
      let stock = beers.find((beer) => {
        return beer.id === product.id;
      });
      let newStockAmount = { stock: stock.stock - product.amount };
      //   axios.patch(`http://localhost:3011/beers/${product.id}`, newStockAmount);
      axios.patch(
        `https://kaljakauppa.herokuapp.com/beers/${product.id}/`,
        newStockAmount
      );
    });
    deleteHandler();
  };

  const deleteHandler = () => {
    // axios.delete(`http://localhost:3011/orders/${orders.id}`);
    axios.delete(`https://kaljakauppa.herokuapp.com/orders/${orders.id}/`);
    window.location.reload();
  };

  return (
    <div className={classes.container}>
      {orders.products.map((product) => {
        return (
          <div key={product.id} className={classes.productBorder}>
            <div className={classes.product}>
              <h3>{product.beer_name}</h3>
              <p>Amount: {product.amount}</p>
            </div>
          </div>
        );
      })}
      <div className={classes.controls}>
        <button className={classes.controls_btn} onClick={submitHandler}>
          Send
        </button>
        <button className={classes.controls_btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
