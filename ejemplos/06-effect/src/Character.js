import { useEffect, useState } from "react"

function Character() {
  const [i, setI] = useState(1)
  const [char, setChar] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${i}`)
      const data = await res.json()
      setChar(data)
    })()
    // Al poner la i entre las dependencias, repetiremos el código del useEffect
    // cada vez que i cambie, actualizando todo el componente con datos nuevos.
  }, [i])

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
