import classes from "./Orders.module.css";
import { Link } from "react-router-dom";
function Orders() {
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
    </>
  );
}

export default Orders;
