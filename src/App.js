import React, { useState } from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
import Search from "./components/Search/Search";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Fourzerofour from "./components/404/Fourzerofour";
import Join from "./components/Join/Join";
import Newsletter from "./components/Newsletter/Newsletter";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Checkout from "./components/Checkout/Checkout";
import Stock from "./components/Stock/Stock";

const App = () => {
  const [cartChanges, setCartChanges] = useState([]);
  const [total, setTotal] = useState(0);

  const changeHandler = (beer, amount) => {
    const duplicate = cartChanges.find((cartId) => {
      return cartId.id === beer.id;
    });
    if (duplicate) {
      setCartChanges(
        cartChanges.map((singleBeer) => {
          return singleBeer.id === beer.id
            ? { ...duplicate, amount: parseInt(amount, 10) }
            : singleBeer;
        })
      );
    } else if (beer.stock > 0) {
      setCartChanges([...cartChanges, { ...beer, amount: amount }]);
      setTotal(total + beer.price);
    }
  };

  const beersTotal = Number(total.toFixed(2));

  // const beersTotal = Number(total.toFixed(2));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartChanges={cartChanges} />}>
          <Route index element={<Home />} />
          <Route
            path="beers"
            element={
              <Beers cartChanges={cartChanges} changeHandler={changeHandler} />
            }
          />
          <Route
            path="beers/:id"
            element={
              <Beer cartChanges={cartChanges} changeHandler={changeHandler} />
            }
          />
          <Route path="search/:search" element={<Search />} />
          <Route
            path="shoppingCart"
            element={
              <ShoppingCart
                cartChanges={cartChanges}
                setCartChanges={setCartChanges}
                changeHandler={changeHandler}
                beersPrice={beersTotal}
              />
            }
          />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="404" element={<Fourzerofour />} />
          <Route path="joinus" element={<Join />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route
            path="checkout"
            element={
              <Checkout beersPrice={beersTotal} shoppingcart={cartChanges} />
            }
          />
          <Route path="stock" element={<Stock />}>
            <Route path="stats" />
            <Route index path="stock" />
            <Route path="orders" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
