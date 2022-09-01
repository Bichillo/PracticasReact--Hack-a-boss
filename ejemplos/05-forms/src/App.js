import { useState } from 'react'
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Modal from './Modal/Modal';
import './App.css';
import Todo from './Todo/Todo';

function App() {
  const [user, setUser] = useState()
  return (
    <div className="App">
      <header>
        <span>MyApp</span>
        <span className="user-section">
          {!user &&
            <>
              <Modal label="Iniciar sesión">
                <Login setUser={setUser} />
              </Modal>
              <Modal label="Registro">
                <Signup setUser={setUser} />
              </Modal>
            </>
          }
          {user &&
            <span>👤{user.username}</span>
          }
        </span>
      </header>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
