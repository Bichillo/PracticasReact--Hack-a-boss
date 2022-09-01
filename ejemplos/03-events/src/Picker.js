function Picker({ value }) {

  const handlePlus = () => {
    console.log(`++`)
  }

  const handleMinus = () => {
    console.log(`--`)
  }


  return (
    <div>
      {value}
      <button onClick={handlePlus}>⮝</button>
      <button onClick={handleMinus}>⮟</button>
    </div>
  );
}

export default Picker;
