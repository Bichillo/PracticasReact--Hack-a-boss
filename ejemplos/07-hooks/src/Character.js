import { useState } from "react"
import { useCharacter } from "./hooks/api"

function Character() {
  const [i, setI] = useState(1)
  const char = useCharacter(i)

  return (
    <div>
      <button onClick={() => setI(i-1)}>Anterior</button>
      <button onClick={() => setI(i+1)}>Siguiente</button>
      {char &&
        <div>
          <h2>{char.name}</h2>
          <img src={char.image} alt={char.name} />
        </div>
      }
    </div>
  )
}

export default Character
