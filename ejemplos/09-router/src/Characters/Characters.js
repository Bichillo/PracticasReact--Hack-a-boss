import { Link } from "react-router-dom"
import { useCharacters } from "../hooks/api"
import './Characters.css'

function Characters() {
  const chars = useCharacters()

  return (
    <div className="characters">
      {chars && chars.results.map(p =>
        <Link to={`/characters/${p.id}`} key={p.id} className="entry">
          <h2>{p.name}</h2>
          <img src={p.image} alt={p.name} />
        </Link>
      )}
    </div>
  )
}

export default Characters
