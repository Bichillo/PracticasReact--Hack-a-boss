import { useState } from 'react'

function Accordion({ label, children }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>{label}</h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'Ver menos' : 'Ver más'}
      </button>
      {show && children}
    </>
  )
}

export default Accordion
