import { useEffect, useState } from "react";

function Rick() {
  const [rick, setRick] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => {
        setRick(data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {rick &&
        rick.map((r) => (
          <div key={r.id}>
            <h2>{r.name}</h2>
            <img src={r.image} alt={r.name} />
            <h4>{r.status}</h4>
          </div>
        ))}
    </div>
  );
}





export default Rick;
