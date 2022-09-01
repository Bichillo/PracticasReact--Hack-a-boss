import room from './data/room.json'
import products from './data/products.json'
import characters from './data/characters.json'
import './App.css';

function App() {
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
      <ul>
        {room.services.map(service =>
          <li key={service}>{service}</li>
        )}
      </ul>

      <hr />

      <div className="products">
        {products.map(product =>
          <article className="product" key={product.id}>
            <h3>{product.title}</h3>
            <span className="price">{product.price} €</span>
            <div className="image" style={{ backgroundImage: `url("${product.image}")` }} />
            {product.rating.count >= 400 &&
              <span className="featured">Destacado</span>
            }
          </article>
        )}
      </div>

      <hr />

      <div className="characters">
        {characters.map(char =>
          <div className="character" key={char.id}>
            <h3>{char.name}</h3>
            <div className="image" style={{ backgroundImage: `url("${char.image}")` }} />
            <span className={ 'status ' + char.status}>
            {char.status}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
