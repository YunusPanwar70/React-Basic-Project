import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import PostCard from './components/PostCard';
import GetPosts from './components/GetPosts';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    GetPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {
        data ? data.map(e => < PostCard title={e.title} body={e.body} />) : <p>No Data</p>
      }
    </div>
  );
}
export default App;