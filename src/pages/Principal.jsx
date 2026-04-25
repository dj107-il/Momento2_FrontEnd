import React from 'react';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <main className='hero'>
      <h1>El arte de la paciencia</h1>
      <p>Descubre la serenidad a traves del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.</p>
      <Link to="../pages/Reservas.jsx" className="btn-primary">Reserva un taller</Link>
    </main>
  );
}

export default Principal;