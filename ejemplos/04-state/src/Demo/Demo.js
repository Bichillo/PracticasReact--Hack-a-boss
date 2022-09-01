import { useState } from 'react'
import './Demo.css'
import DemoLogin from './DemoLogin'
import Header from './Header'

function Demo() {
  const [user, setUser] = useState()

  return (
    <div id="demo">
      <Header user={user} setUser={setUser} />
      <main>
        {user
          ? <div>Hola mundo!</div>
          : <DemoLogin setUser={setUser} />
        }
      </main>
    </div>
  )
}

export default Demo
