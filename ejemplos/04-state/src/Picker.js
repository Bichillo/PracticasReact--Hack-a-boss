import {useState} from 'react';
function Picker({ defaultValue }) {

  const [value, setValue] = useState(defaultValue);// value le puedo dar el nombre que quiera. 

  const handlePlus = () => {
    console.log(`++`,value);
    setValue(value + 1);
  }

  const handleMinus = () => {
    console.log(`--`,value);
    setValue(value - 1);
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
