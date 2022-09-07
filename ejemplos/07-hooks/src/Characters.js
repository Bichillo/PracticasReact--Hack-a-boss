import { useCharacters } from "./hooks/api"

function Characters() {

  const chars = useCharacters()

  return (
    <div>
      {chars && chars.results.map(p =>
        <div key={p.id}>
          <h2>{p.name}</h2>
          <img src={p.image} alt={p.name} />
        </div>
      )}
    </div>
  )
}

export default Characters
