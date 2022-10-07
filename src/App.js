import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import PointGuards from './components/team/PointGuards';
import ShootingGuards from './components/team/ShootingGuards';
import SmallForwards from './components/team/SmallForwards';
import PowerForwards from './components/team/PowerForwards';
import Centers from './components/team/Centers';
import './App.css';

function App() {

  const [morans, setMorans] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/morans")
      .then(res => res.json())
      .then(setMorans)
      .catch(console.error)
  },[])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route exact path="/" element={<Home morans={morans} />} />
        {/* <Route exact path="/discovery" element={<Discovery setMorans={setMorans} morans={morans} />} /> */}
        <Route exact path="/pointguards" element={<PointGuards />} />
        <Route exact path="/shootingguards" element={<ShootingGuards />} />
        <Route exact path="/smallforwards" element={<SmallForwards />} />
        <Route exact path="/powerforwards" element={<PowerForwards />} />
        <Route exact path="/centres" element={<Centers />} />
      </Routes>
      <AboutUs />
    </BrowserRouter>
  );
}

export default App;
