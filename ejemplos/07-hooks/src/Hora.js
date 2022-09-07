import useHora from "./hooks/useHora"

function Hora() {
  const hora = useHora()

  return (
    <div>
      Son las: {hora}
    </div>
  )
}

export default Hora
