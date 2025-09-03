import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]); // State to store the fetched posts
  const [error, setError] = useState(null); // State to handle potential errors
  const [loading, setLoading] = useState(true); // State to indicate loading status
  
  
   useEffect(() => {
    // useEffect hook to fetch data when the component mounts
    async function fetchData() {
      try {
        let url = "https://jsonplaceholder.typicode.com/posts";
        let response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        setPosts(data); // Update the state with the fetched data
      } catch (e) {
        setError(e); // Catch and set any errors
      } finally {
        setLoading(false); // Set loading to false once fetching is complete (success or error)
      }
    }
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array means this effect runs only once after the initial render
  
  if (loading) {
    return <div className="container">Loading posts...</div>;
  }

  if (error) {
    return <div className="container">Error: {error.message}</div>;
  }
  
  return (
    <>
      <div className="container">
        {posts.map(data=>{ // Map over the 'posts' state
          return(
            <div className="card" key={data.id}>
              <img src="https://img.freepik.com/premium-vector/african-american-man-young-male-character-wearing-casual-clothes-walking-with-earphones-isolated-white-background-vector-line-illustration_1170970-308.jpg?w=360" alt=" profile image" />
              <h2>UserId: {data.userId}</h2>
              <h1>{data.title}</h1>
              <p>{data.body}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
