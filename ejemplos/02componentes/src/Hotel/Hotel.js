import CounterButton from './CounterButton';
import room from '../data/room.json'
import Reservar from './Reservar';
import Score from './Score';
import Like from './Like';
import Spoiler from './Spoiler';
import Blink from './Blink';
import Switch from './Switch';

function Hotel() {
  return (
    <div className={'App ' + (room.available ? 'available' : 'not-available')}>
      <h1>{room.title}</h1>
      <p className="description">
        {room.description}
      </p>
      <p className="status">
        {room.available ? 'Disponible' : 'No disponible'}
      </p>
      Desde sólo {room.price} € por noche.
      <p>
        <CounterButton label="Huéspedes" number={3} icon="😴" />
        <CounterButton label="Camas" number={2} icon="🛏️" />
      </p>
      <Reservar precio={room.price} />
      <Score value={room.score} />
      <Like active />
      <Switch value />

      <p>
        La etiqueta <Blink>blink</Blink> se usa para hacer <Blink>parpadear</Blink> un texto.
      </p>

      <Spoiler show>
        <ul>
          {room.services.map(service =>
            <li key={service}>{service}</li>
          )}
        </ul>
      </Spoiler>
    </div>
  )
}

export default Hotel;
