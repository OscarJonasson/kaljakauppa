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
import Header from "./components/Header/Header";

const App = () => {
  const [cartChanges, setCartChanges] = useState([]);

  const changeHandler = (beer, amount) => {
    const duplicate = cartChanges.find((cartId) => {
      // console.log("cartId:", cartId.id, "beerId:", beer.id);
      return cartId.id === beer.id;
    });
    // console.log(duplicate);
    if (duplicate) {
      setCartChanges(
        cartChanges.map((singleBeer) => {
          // console.log(
          //   "single:",
          //   singleBeer,
          //   "duplicate:",
          //   duplicate,
          //   "amount:",
          //   amount
          // );
          return singleBeer.id === beer.id
            ? { ...duplicate, amount: amount }
            : singleBeer;
        })
      );
      // console.log("newCart:", cartChanges);
    } else if (beer.stock > 0) {
      setCartChanges([...cartChanges, { ...beer, amount: amount }]);
      // console.log(cartChanges);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
                changeHandler={changeHandler}
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
            element={<Checkout shoppingcart={cartChanges} />}
          />
          <Route path="header" element={<Header cartChanges={cartChanges} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
