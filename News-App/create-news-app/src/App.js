import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import NewsBoard from './components/NewsBoard/NewsBoard';
import NewsItem from './components/NewsItem/NewsItem';
function App() {
  const [category, setCategory] = useState('genral');
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <NewsItem />
    </div>
  );
}

export default App;