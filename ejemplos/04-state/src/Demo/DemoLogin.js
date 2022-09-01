function DemoLogin({ setUser }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(e.target.elements.username.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input name="username" />
      </label>
      <label>
        Contraseña:
        <input type="password" name="password" />
      </label>
      <button>Entrar!</button>
    </form>
  )
}

export default DemoLogin
