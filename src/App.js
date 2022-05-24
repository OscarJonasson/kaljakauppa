import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Beer from './components/Beers/Beer/Beer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beer" element={<Beer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
