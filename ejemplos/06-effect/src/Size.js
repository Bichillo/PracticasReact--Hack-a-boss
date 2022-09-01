import { useEffect, useState } from 'react'

function Size() {
  const [size, setSize] = useState(`${window.innerWidth} x ${window.innerHeight}`)

  useEffect(() => {
    const handler = () => {
      console.log('Resize')
      setSize(`${window.innerWidth} x ${window.innerHeight}`)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div>
      Resolución: {size}
    </div>
  )
}

export default Size
