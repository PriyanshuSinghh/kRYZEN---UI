import "./App.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home";




const App = () => {
  return (
    <>
    <Routes>
      
<Route path="/home" element = {<Home />} />
      
    </Routes>
      
    
    </>
  );
};

export default App;