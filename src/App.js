import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Beer from './components/Beer/Beer';
import Beers from './components/Beers/Beers';
import Search from './components/Search/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beers" element={<Beers />} />
          <Route path="beers/:id" element={<Beer />} />
          <Route path="search/:search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
