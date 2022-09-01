import './Reservar.css'

function Reservar({ precio = 0 }) {
  return (
    <div className="reservar">
      <h3>Reserva ahora</h3>
      <span>desde {precio} / noche</span>
    </div>
  )
}

export default Reservar
