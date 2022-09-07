import "./App.css";
import Countdown from "./Countdown";
import Hora from "./Hora";
import Size from "./Size";
import Character from "./Character";
import Appi from "./localStorage";
import Todo from "./Todo";
import Like from "./Like";
import Login from "./Login";
//import Characters from './Characters';
function App() {
  return (
    <div className="App">
      <div>
        <Hora />
      </div>
      <p>
        <Size />
      </p>
      <div>
        <Countdown />
      </div>
      {/*<p><Characters /></p>*/}
      <div>
        <Character />
      </div>
      <div>
        <Appi />
      </div>
      <div>
        <Todo />
      </div>
      <div>
        <Like />{" "}
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
