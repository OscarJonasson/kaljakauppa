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

const App = () => {
  const [cart, setCart] = useState([{}]);
  const [cartChanges, setCartChanges] = useState([]);

  // const changeHandler = beer => {
  //   const exists = cartChanges.find(x => x.id === beer.id);
  //   if (exists) {
  //     setCartChanges(
  //       cartChanges.map(x =>
  //         x.id === beer.id ? { ...exists, amount: exists.amount } : x
  //       )
  //     );
  //   }else{
  //     setCartChanges([])
  //   }
  // };

  const changeHandler = (beer, amount) => {
    setCartChanges([...cartChanges, { ...beer, amount: amount }]);
    console.log(cartChanges);
  };
  // const ingChangeHandler = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...ingredients];
  //   list[index][name] = value;
  //   setIngredients(list);
  //   setRecipe({ ...recipe, ingredients: ingredients });
  // };

  // const changeHandler = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...cartChanges];
  //   list[index][name] = value;
  //   setCartChanges(list);
  //   // setCartChanges({
  //   //   ...cartChanges,
  //   //   [e.target.name]: e.target.value,
  //   // });
  //   console.log(cartChanges);
  // };

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
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
