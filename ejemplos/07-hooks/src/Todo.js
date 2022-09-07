import { useState } from 'react'

const useList = () => {
  const [entries, setEntries] = useState([])
  return {
    get: () => entries,
    add: (newEntry) => setEntries([...entries, newEntry]),
    remove: (index) => setEntries(entries.filter((_, i) => i !== index))
  }
}

function Todo() {
  const [newEntry, setNewEntry] = useState('')
  const entries = useList()

  const handleSubmit = e => {
    e.preventDefault()
    entries.add(newEntry)
    setNewEntry('')
  }

  return (
    <div className="todo">
      <ul>
        {entries.get().map((entry, index) =>
          <li key={index} onClick={() => entries.remove(index)}>
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
