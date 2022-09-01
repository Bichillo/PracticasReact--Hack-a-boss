import './CounterButton.css'

function CounterButton({ label, icon, number = 0 }) {
  return (
    <div className="counter-button">
      <span className="left">
        {icon} {label}
      </span>
      <span className="right">
        {number}
      </span>
    </div>
  )
}

export default CounterButton
