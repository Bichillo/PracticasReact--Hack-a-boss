import { useState } from 'react'
import useSendData from './hooks/useSendData'

function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, data, sendData] = useSendData('https://8gag-api.anxoso.com/login')

  const handleSubmit = (e) => {
    e.preventDefault()
    sendData({ username, password })
  }

  if (status === 'loading') {
    return <div id="login" className="loading">Cargando...</div>
  }

  return (
    <form id="login" onSubmit={handleSubmit}>
      <h1>Iniciar sesión</h1>
      <label>
        Usuario:
        <input value={username} onChange={e => setUsername(e.target.value)} name="username" />
      </label>
      <label>
        Contraseña:
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" />
      </label>
      {status === 'error' &&
        <p className="error">
          {data.error}
        </p>
      }
      <button>Entrar!</button>
    </form>
  )
}

export default Login
