import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Principal from './pages/Principal'
import Filosofia from './pages/Filosofia'
import Galeria from './pages/Galeria'
import Reserva from './pages/Reservas'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/reservas" element={<Reserva />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
