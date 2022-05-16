import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Destination from './pages/Destination';
import Crew from './pages/Crew'
import Technology from './pages/Technology';
import Home from './components/Home'


export default function App() {
 return (
   <div>
  
   
    <Router>
  {/* syntax is differnent from previous version, but can find solution on github */}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/destination' element={<Destination />} />
        <Route exact path='/crew' element={<Crew />} />
        <Route exact path='/technology' element={<Technology />} />
        
      </Routes>
    </Router>
    </div>
  )
}

