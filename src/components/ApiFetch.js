import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'}).then(result => {
      result.json().then(data => {
        setPosts(data)
      })
    })

    // axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
    //   setPosts(result.data)
    // })
  }, [clicked])

  return (
    <div>
      <input type='text' value={id} onChange={event=> setId(event.target.value)} />
      <br />
      <button type='button' onClick={handlerClicked}>Get Post</button>
      <br />
      {posts.title}
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default ApiFetch
