import { Link } from 'react-router-dom';
import { useSetUser, useUser } from '../UserContext';

function UserSection() {
  const user = useUser()
  const setUser = useSetUser()

  if (user) {
    return (
      <div className="user-section">
        <span>{user.username}</span>
        <span className="logout" onClick={() => setUser(null)}>⏻</span>
      </div>
    )
  } else {
    return (
      <div className="user-section">
        <Link to="/login">Iniciar sesión</Link>
        /
        <Link to="/signup">Registro</Link>
      </div>
    )
  }
}

export default UserSection
