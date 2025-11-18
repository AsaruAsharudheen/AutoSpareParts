import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import AddCar from './Components/AddCar/addcar';
import PartDetails from './Components/partdetail/partdetail';
import Hero from './Components/Hero/hero';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/part-details" element={<PartDetails />} />
      </Routes>
    </>
  );
};

export default App;
