import useCountdown from "./hooks/useCountdown"

function Countdown({ seconds = 10 }) {
  const t = useCountdown(seconds)

  return (
    <div>
      Faltan {t} segundos...
    </div>
  )
}

export default Countdown
