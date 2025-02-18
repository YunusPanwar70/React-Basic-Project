import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import './stle.css';
import CountComponent from './components/CountComponent';
function App() {
  return (
    <div className="todo-container">
      <CountComponent />
      <Header value='Todo' />
      <TodoItem text='Eat' />
      <TodoItem completed={true} text='Code' />
      <TodoItem text='Play' />
      <TodoItem text='Study' />
      <TodoItem text='Sleep Again' />
      <Button />
    </div>
  );
}

export default App;