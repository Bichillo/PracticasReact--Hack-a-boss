import { useState } from 'react'
import './Modal.css'

function Modal({ children, label = 'Abrir modal' }) {
  const [show, setShow] = useState(false)

  return (
    <div className="modal">
      <button onClick={() => setShow(true)}>
        {label}
      </button>
      {show &&
        <div className="modal-bg" onClick={() => setShow(false)}>
          <div className="modal-fg">
            {children}
          </div>
        </div>
      }
    </div>
  )
}

export default Modal
