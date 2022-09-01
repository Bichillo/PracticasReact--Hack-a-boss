function Saluda({ nombre }) {

  const handleClick = () => {
    console.log(`Hola, ${nombre}!`)
  }

  return (
    <button onClick={handleClick}>Saludar a {nombre}</button>
  );
}

export default Saluda;
