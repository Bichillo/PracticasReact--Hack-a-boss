import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/api"

function Character() {
  const { id } = useParams()
  const char = useCharacter(id)

  return (
    <div>
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
