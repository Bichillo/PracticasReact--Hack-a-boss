import { useState } from 'react'

const useSendData = (url) => {
  const [status, setStatus] = useState('')
  const [response, setResponse] = useState()

  const sendData = async (data) => {
    setStatus('loading')
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json()
    setResponse(resData)
    if (resData.error) {
      setStatus('error')
    } else {
      setStatus('success')
    }
  }
  return [status, response, sendData]
}

export default useSendData
