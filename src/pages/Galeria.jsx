import React from 'react'

const bonsais = [
    "Arce Japonés",
    "Pino Negro",
    "Ficus Retusa",
    "Olmo Chino",
    "Enebro",
    "Azalea",
]

function Galeria() {
  return (
    <main className='galeria'>
        <h1>Nuestra Colección</h1>
        <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
        <div className="galeria-grid">
            {bonsais.map((nombre) => (
                <div key={nombre} className='tarjeta'>
                    <p>{nombre}</p>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Galeria
