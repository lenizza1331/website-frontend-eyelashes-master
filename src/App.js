import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './assets/logo.png';
import Contact from './Contact';
import Price from './Price';
import Eyelashes from './Eyelashes';
import Permanent from './Permanent';
import Home from './Home';
import Menu from './Menu';


function App() {
  return  <Router>
  <nav className='navbar'>
    <div className='navbar__content'>
    <div className='navbar__logo'>
      <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
      </div>

      <div className='navbar__links'>
        <Link className='nav__link' to="/eyelashes" title='На главную'>Наращивание ресниц</Link>
        <Link className='nav__link' to="/permanent">Перманентный макияж</Link>
        <Link className='nav__link' to="/price">Цены</Link>
        <Link className='nav__link' to="/contact">Контакты</Link>
      </div> 
      <Menu/>
    </div>
    
  </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eyelashes" element={<Eyelashes />} />
      <Route path="/permanent" element={<Permanent />} />
      <Route path="/price" element={<Price />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </Router>
}

export default App;
