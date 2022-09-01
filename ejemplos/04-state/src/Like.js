import { useState } from 'react'

function Like() {
  const [active, setActive] = useState(false)

  return (
    <span onClick={() => setActive(!active)}>
      {active ? '♥': '♡' }
    </span>
  )
}

export default Like
