import { useState } from 'react'
import { useSetUser } from '../UserContext'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')

  const setUser = useSetUser()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('https://8gag-api.anxoso.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    console.log(data)
    if (data.error) {
      setStatus('error')
    } else {
      setUser(data)
    }
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
          Usuario o contraseña incorrectos.
        </p>
      }
      <button>Entrar!</button>
    </form>
  )
}

export default Login
