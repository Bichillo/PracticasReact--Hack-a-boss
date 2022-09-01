import { useEffect, useState } from 'react'
import './Subscribe.css'

function Subscribe() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return show &&
    <div className="modal-bg" onClick={() => setShow(false)}>
      <div className="modal-fg" onClick={e => e.stopPropagation()}>
        Suscríbete a nuestra newsletter!
      </div>
    </div>
}

export default Subscribe
