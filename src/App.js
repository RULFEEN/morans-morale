import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Discovery from './components/Discovery';
import './App.css';

function App() {

  const [morans, setMorans] = useState([])

  useEffect(() => {
    fetch("../db.json/morans")
      .then(res => res.json())
      .then(setMorans)
      .catch(console.error)
  },[])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route exact path="/" element={<Home morans={morans} />} />
        <Route exact path="/discovery" element={<Discovery setMorans={setMorans} morans={morans} />} />
      </Routes>
      <AboutUs />
    </BrowserRouter>
  );
}

export default App;
