import { useEffect, useState } from 'react'

function useHora() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return hora
}

export default useHora
