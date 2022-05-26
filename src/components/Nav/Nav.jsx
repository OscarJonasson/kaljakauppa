import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/beers">
            Beers <i class="fa-solid fa-beer-mug"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
