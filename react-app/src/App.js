import "./App.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import HomeNavbar from './components/homenavbar'
import Pricewatcher from "./components/pricewatcher";
import Table from "./components/tabletable";
function App() {
  return (
    <>
      <Routes>

        <Route path="/header" element={<Header />} />
        <Route path="/homeNavbar" element={<HomeNavbar />} />
        <Route path="/pricewatcher" element={<Pricewatcher />} />
        <Route path="/table" element={<Table/>}  />
      </Routes>

    </>
  );
}

export default App;