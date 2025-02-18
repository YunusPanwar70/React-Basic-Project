import './App.css';
import { useContext } from 'react';
import Counter from './components/Counter';
import { conterContex } from './context/Counter';
function App() {
  const conterState = useContext(conterContex);
  console.log('context', conterState);

  return (
    <div className="App">
      <h1>Count is 0</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
export default App;