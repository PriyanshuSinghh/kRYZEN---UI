import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import NavigationBar from './NavigationBar';




const App = () => {
  return (
    <>
    <Routes>
      
      <Route path='/home' element={<Home/>}/>
      
      <Route path='/NavigationBar' element={<NavigationBar/>}/>

      
    </Routes>
      
    
    </>
  );
};

export default App;