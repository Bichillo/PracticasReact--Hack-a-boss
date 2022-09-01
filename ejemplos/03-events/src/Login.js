// Crear login con dos inputs y un boton de login

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando:', e.target.elements.username.value, e.target.elements.password.value)
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
export default Login;
