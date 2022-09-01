import { useState } from 'react'
import './Spoiler.css'

function Spoiler({ children }) {
  const [show, setShow] = useState(false)

  return (
    <div className={'spoiler ' + (show ? 'show' : 'hide')} onClick={() => setShow(!show)}>
      {children}
    </div>
  )
}

export default Spoiler
