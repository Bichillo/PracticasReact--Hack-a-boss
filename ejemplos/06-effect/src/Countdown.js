import { useEffect, useState } from 'react'

function Countdown({ seconds = 10 }) {
  const [t, setT] = useState(seconds)

  useEffect(() => {
    console.log('Pongo timer')
    const timer = setInterval(() => {
      console.log('Timer')
      setT(x => x - 1)
    }, 1000)

    return () => {
      console.log('Quito timer')
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      Faltan {t} segundos...
    </div>
  )
}

export default Countdown
