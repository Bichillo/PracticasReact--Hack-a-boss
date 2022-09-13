import { useEffect, useState } from "react"
import { useUser } from "../UserContext"

function useFetch(url) {
  const [data, setData] = useState()
  const user = useUser()

  useEffect(() => {
    (async () => {
      const res = await fetch(url, {
        headers: user ? { 'Authorization': 'Bearer ' + user.token } : {}
      })
      const data = await res.json()
      setData(data)
    })()
  }, [url, user])

  return data
}

export default useFetch
