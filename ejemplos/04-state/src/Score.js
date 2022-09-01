import { useState } from "react";
function Score() {
  const [value, setValue] = useState(0);
  return (
    <div className="score">
      <span onClick={() => setValue(1)}> {value >= 1 ? "★" : "☆"}</span>
      <span onClick={() => setValue(12)}>{value >= 2 ? "★" : "☆"}</span>
      <span onClick={() => setValue(3)}>{value >= 3 ? "★" : "☆"}</span>
      <span onClick={() => setValue(4)}>{value >= 4 ? "★" : "☆"}</span>
      <span onClick={() => setValue(5)}>{value >= 5 ? "★" : "☆"}</span>
    </div>
  );
}

export default Score;
