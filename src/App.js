import React, { useEffect, useState } from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
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
import axios from "axios";

const App = () => {
  const [cartChanges, setCartChanges] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3011/beers/${id}`)
      .then((res) => setCartChanges(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beers" element={<Beers />} />
          <Route path="beers/:id" element={<Beer />} />
          <Route path="search/:search" element={<Search />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
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
