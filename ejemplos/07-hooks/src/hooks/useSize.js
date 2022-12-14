import { useEffect, useState } from 'react'

function useSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    const handler = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return size
}

export default useSize
