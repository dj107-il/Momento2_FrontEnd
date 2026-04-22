import React from 'react';

function NavBar() {
  return (
    <nav>
      <a href="/">Zenith Bonsai</a>
      <ul>
        <li><a href="/Filosofia">Filosofía</a></li>
        <li><a href="/galeria">Galeria</a></li>
        <li><a href="/reservas">Reservas</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;