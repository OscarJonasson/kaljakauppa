import classes from "./Orders.module.css";
import { Link } from "react-router-dom";
import OrderCard from "../OrderCard/OrderCard";
import axios from "axios";
import { useEffect, useState } from "react";
function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3011/orders/")
      //   .get("https://kaljakauppa.herokuapp.com/orders")
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(orders);
  return (
    <>
      <ul className={classes.links}>
        <Link to="/stock">
          <li>Stock</li>
        </Link>
        <Link to="/stats">
          <li>Stats</li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
      </ul>
      <div className={classes.incomingOrders}>
        {orders.map((order) => {
          return <OrderCard key={order} orders={order} />;
        })}
      </div>
    </>
  );
}

export default Orders;
