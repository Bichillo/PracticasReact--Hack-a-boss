import { useEffect, useState } from "react"

function Posts() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch('https://8gag-api.anxoso.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  // Durante el primer render todavía no han cargado los posts
  // por tanto *siempre* hay que verificar, antes de acceder,
  // si ya han cargado.

  return (
    <div>
      {posts && posts.map(p =>
        <div>
          <h2>{p.title}</h2>
          <img src={p.image} alt={p.title} />
        </div>
      )}
    </div>
  )
}

export default Posts
