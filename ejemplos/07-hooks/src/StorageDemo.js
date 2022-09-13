import useLocalStorage from "./hooks/useLocalStorage"

function StorageDemo() {
  const [info, setInfo] = useLocalStorage({ name: '', surname: '' })

  return (
    <form>
      <input value={info.name} onChange={e => setInfo({...info, name: e.target.value})} />
      <input value={info.surname} onChange={e => setInfo({...info, surname: e.target.value})} />
    </form>
  )
}

export default StorageDemo
