import { Navigate, NavLink, Route, Routes, useNavigate } from "react-router-dom"
import Characters from './Characters'
import Character from './Character'
import { useUser } from "../UserContext"

function CharIndex() {
  const user = useUser()
  const navigate = useNavigate()

  const handleRandom = () => {
    // TODO: Do something interesting here...
    const id = Math.floor(Math.random() * 500)
    navigate(`/characters/${id}`)
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className="with-subsections">
      <aside>
        <ul>
          <li><NavLink to="/characters" end>Índice</NavLink></li>
          <li onClick={handleRandom}>Aleatorio</li>
          <li>Buscador</li>
          <li>Crear</li>
        </ul>
      </aside>
      <Routes>
          <Route path="/" element={<Characters />} />
          <Route path=":id" element={<Character />} />
      </Routes>
    </div>
  )
}

/*
*/

export default CharIndex
