import React, { useState } from 'react'

function Reservas() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    nivel: 'Principiante (Nunca he tenido un Bonsái)',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.nombre.trim()){
      alert('Por favor, ingresa tu nombre completo.')
      return
    }

    if (!formData.correo.trim()){
      alert('Por favor, ingresa tu correo electrónico.')
      return
    }

    localStorage.setItem('reserva', JSON.stringify(formData))
    console.log('Datos de reserva guardados✅:')
    alert('¡Gracias por tu reserva! Nos pondremos en contacto contigo pronto.')
  }

  return (
    <main className='reservas'>
        <h1>Reserva un Taller</h1>
        <p>Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.</p>
        <div className='formulario'>
          <div className="campo">
            <label for="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" placeholder='Ej. Ana Silva' required value={formData.nombre} onChange={handleChange} />
          </div>
          <div className="campo">
            <label for="correo">Correo electrónico</label>
            <input type="email" id="correo" name="correo" placeholder='tu@email.com' value={formData.correo} onChange={handleChange} />
          </div>
          <div className="campo">
            <label for="nivel">Nivel de experiencia</label>
            <select id="nivel" name="nivel" required value={formData.nivel} onChange={handleChange}>
                <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
                <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
                <option value="avanzado">Avanzado (Busco perfeccionar técnicas)</option>
            </select>
          </div>
          <div className="campo">
            <label for="mensaje">Mensaje (Opcional)</label>
            <textarea id="mensaje" name="mensaje" placeholder='¿Qué te gustaría aprender?' value={formData.mensaje} onChange={handleChange}></textarea>
          </div>
          <button className="btn-submit" onClick={handleSubmit} type="submit">Enviar Solicitud</button>
        </div>
    </main>
  )
}

export default Reservas

