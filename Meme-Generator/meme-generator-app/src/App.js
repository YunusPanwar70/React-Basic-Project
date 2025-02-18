import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;