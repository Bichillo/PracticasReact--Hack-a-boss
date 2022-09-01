function CharacterCard({ char }) {
  return (
    <div className="character">
      <h3>{char.name}</h3>
      <div className="image" style={{ backgroundImage: `url("${char.image}")` }} />
      <span className={'status ' + char.status}>
        {char.status}
      </span>
    </div>
  )
}

export default CharacterCard
