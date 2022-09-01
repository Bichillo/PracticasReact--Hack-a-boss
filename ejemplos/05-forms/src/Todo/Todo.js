import { useState } from 'react'

function Todo() {
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setEntries([...entries, newEntry])
    setNewEntry('')
  }

  return (
    <div className="todo">
      <ul>
        {entries.map((entry, index) =>
          <li key={index} onClick={() => setEntries(entries.filter((_, i) => i !== index))}>
            {entry}
          </li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input placeholder="Escribe..." value={newEntry} onChange={e => setNewEntry(e.target.value)} />
      </form>
    </div>
  )
}

export default Todo
