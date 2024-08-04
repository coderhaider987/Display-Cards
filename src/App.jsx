import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [posts, setposts] = useState([]);


  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setposts(data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="container">
        {posts.map((post) => {
          return (
            <div className="card">
              <div className="ids">
                <div className="userId"><b>UserId:</b> {post.userId}</div>
                <div className="id"><b>ID:</b> {post.id}</div>
              </div>
              <div className="title"><b>Title:</b> {post.title}</div>
              <div className="body"><b>Body:</b> {post.body}</div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App