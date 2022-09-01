import Accordion from "./Accordion";
import Subscribe from "./Subscribe/Subscribe";
import Noticias from "./Noticias/Noticias";
import "./App.css";
import Countdown from "./Countdown";
import Hora from "./Hora";
import Posts from "./Posts";
import Rick from "./Rick";
import Size from "./Size";
import Scroll from "./Scroll/Scroll";
import Character from "./Character";

function App() {
  return (
    <div className="App">
      <Accordion label="Subscribe">
        <Subscribe />
      </Accordion>
      <Accordion label="Noticias">
        <Noticias />
      </Accordion>
      <Accordion label="Countdown">
        <Countdown />
      </Accordion>
      <Hora />
      <Accordion label="Posts">
        <Posts />
      </Accordion>
      <Accordion label="Rick and Morty">
        <Rick />
      </Accordion>
      <Size />
      <Scroll />
      <Accordion label="Scroll Horizontal">
        <Character />
      </Accordion>
    </div>
  );
}

export default App;
