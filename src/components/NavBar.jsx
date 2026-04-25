import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" >ZENITH BONSAI</NavLink>
      <ul>
        <li><NavLink to="/filosofia" className={({ isActive }) => isActive ? 'active' : ''}>Filosofía</NavLink></li>
        <li><NavLink to="/galeria" className={({ isActive }) => isActive ? 'active' : ''}>Galeria</NavLink></li>
        <li><NavLink to="/reservas" className={({ isActive }) => isActive ? 'active' : ''}>Reservas</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;