import { useEffect, useState } from "react"

const useLocalStorage = (outsideInitialValue) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem('ls')) || outsideInitialValue
  })

  useEffect(() => {
    localStorage.setItem('ls', JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
