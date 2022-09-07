import useSize from "./hooks/useSize"

function Size() {
  const [width, height] = useSize()

  return (
    <div>
      Resolución: {width} x {height}
    </div>
  )
}

export default Size
