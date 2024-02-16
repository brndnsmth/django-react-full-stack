import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [data, setData] = useState([])

  useEffect(()=> {
    console.log({API_URL})
    async function fetchData() {
      try {
        const response = await fetch(`${API_URL}posts`);
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <div>
        {data.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
