import CharacterCard from './CharacterCard'
import characters from '../data/characters.json'

function Characters() {
  return (
    <div className="characters">
      {characters.map(char =>
        <CharacterCard key={char.id} char={char} />
      )}
    </div>
  )
}

export default Characters
