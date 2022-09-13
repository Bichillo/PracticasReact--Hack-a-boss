import { useEffect, useState } from 'react'

function useCountdown(seconds = 10) {
  const [t, setT] = useState(seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setT(x => x - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return t
}

export default useCountdown
