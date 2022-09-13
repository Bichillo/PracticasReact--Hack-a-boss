import './App.css';
import Character from './Character';
// import Characters from './Characters';
import Countdown from './Countdown';
import Hora from './Hora';
import Login from './Login';
import Size from './Size';
import StorageDemo from './StorageDemo';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <div><Hora /></div>
      <div><Size /></div>
      <div><Countdown seconds={20} /></div>
      <div><StorageDemo /></div>
      <hr />
      <div><Todo /></div>
      <hr />
      <Login />
      {/*<p><Characters /></p>*/}
      <div><Character /></div>
    </div>
  );
}

export default App;
