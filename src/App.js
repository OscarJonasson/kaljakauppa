import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Beer from "./components/Beers/Beer/Beer";
import Beers from "./components/Beers/Beers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beer" element={<Beer />} />
          <Route path="beers" element={<Beers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
