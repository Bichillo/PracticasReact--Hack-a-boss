import useCountdown from "./hooks/useCountdown"

function Countdown() {
  const t = useCountdown()

  return (
    <div>
      Faltan {t} segundos...
    </div>
  )
}

export default Countdown
