import { useState } from "react";

function Echo() {
  const [text, setText] = useState("");
  return (
    <form>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{text.toUpperCase()}</p>
    </form>
  );
}

export default Echo;
