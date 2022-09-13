import useFetch from "../hooks/useFetch"
import './Posts.css'

function Posts() {
  const posts = useFetch('https://8gag-api.anxoso.com/posts')

  return (
    <div className="posts">
      {posts && posts?.map(p =>
        <div className="post" key={p.id}>
          <h2>{p.title}</h2>
          <img src={p.image} alt={p.title} />
        </div>
      )}
    </div>
  )
}

export default Posts
