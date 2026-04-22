import React from 'react'

function Reservas() {
  return (
    <main>
        <h1>Reserva un Taller</h1>
        <p>Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        <div>
            <label for="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" placeholder='Ej. Ana Silva' required />
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder='tu@email.com' required />
            <label for="level">Nivel de experiencia</label>
            <select id="level" name="level" required>
                <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
                <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
                <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
            </select>
            <label for="mensaje">Mensaje (Opcional)</label>
            <textarea id="mensaje" name="mensaje" placeholder='¿Qué te gustaría aprender?'></textarea>
            <button type="submit">Enviar Solicitud</button>
        </div>
    </main>
  )
}

export default Reservas

