import "./App.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home";
import NavigationBar from './components/NavigationBar'
import PriceWatcher from "./components/Pricewatcher";
import Pricewatcher2 from "./components/Pricewatcher2";


const App = () => {
  return (
    <>
    <Routes>
      
<Route path="/home" element = {<Home />} />
<Route path="/NavigationBar" element = {<NavigationBar />} />
<Route path="/Pricewatcher" element ={<PriceWatcher />} />     
<Route path="/Pricewatcher2" element={<Pricewatcher2/>} />  
    </Routes>
      
    
    </>
  );
};

export default App;