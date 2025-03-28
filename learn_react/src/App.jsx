import React from 'react';
import { useState } from 'react';
import  MovieCard  from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';


function App(){
  return( 
    <>
    <div>
      <NavBar/>
    </div>
    <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="favorites" element={<Favorites />}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
