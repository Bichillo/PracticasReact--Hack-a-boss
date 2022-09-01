import { useEffect, useState } from 'react'
import './Noticias.css'

function Subscribe() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={'noticias ' + (show ? 'visible' : 'paywall')}>
      {!show &&
        <div className="message">
          Regístrate para seguir leyendo
        </div>
      }
      <main>
        <h1>Sube la luz</h1>
        <p>A pesar de blablablabla, hoy blablabla</p>
      </main>
    </div>
  )
}

export default Subscribe
