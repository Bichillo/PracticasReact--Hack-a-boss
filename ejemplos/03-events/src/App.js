import './App.css';
import Echo from './Echo';
import Picker from './Picker';
import Saluda from './Saluda';
import Mayusculas from './Mayusculas';
import Check from './Check';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saluda nombre="Pepe" />
        <Saluda nombre="Pepa" />
        <Picker value={5} />
        <Echo  />
        <Mayusculas />
        <Check />
        <Login />
      </header>
    </div>
  );
}

export default App;
