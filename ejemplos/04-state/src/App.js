import Picker from './Picker'
import './App.css'
import Calculadora from './Calculadora/Calculadora'
import Like from './Like'
import Spoiler from './Spoiler'
import Modal from './Modal'
import Login from './Login'
import Echo from './Echo'
import Youtube from './Youtube'
import Demo from './Demo/Demo'
import Score from './Score'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Picker: <Picker defaultValue={4} />
        </div>
        <div>
          Calc: <Calculadora />
        </div>
        <div>
          Like: <Like />
        </div>
        <div>
          Spoiler: No me podía imaginar que <Spoiler>Snape iba a matar a Dumbledore</Spoiler>!!!
        </div>
        <div>
          Modal:
          <Modal>
            Este es el contenido...
          </Modal>
          <Modal label="Iniciar sesión">
            <Login />
          </Modal>
        </div>
        <div>
          Echo: <Echo />
        </div>
        <div>
          Likes: <Youtube />
        </div>
        <div>
          <Demo />
        </div>
        <div>
          <Score />
        </div>
      </header>
    </div>
  )
}

export default App
