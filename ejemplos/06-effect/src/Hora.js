import { useEffect, useState } from 'react'

function Hora() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      Son las: {hora}
    </div>
  )
}

export default Hora
