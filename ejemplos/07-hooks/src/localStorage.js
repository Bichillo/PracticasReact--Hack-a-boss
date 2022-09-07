
import useLocalStorage from "./hooks/useLocalStorage";

const Appi = () => {
    const [name, setName] = useLocalStorage("name", "");
    const [age, setAge] = useLocalStorage("age", );
    const [city, setCity] = useLocalStorage("city", "");

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={() => {
                setName("");
                setAge("");
                setCity("");
            }}>Clear</button>

            
            <button onClick={() => {
                localStorage.setItem("name", name);
                localStorage.setItem("age", age);
                localStorage.setItem("city", city);
            }}>Submit</button>


        </div>
    );
};

export default Appi;
