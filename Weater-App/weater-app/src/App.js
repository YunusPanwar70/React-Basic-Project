import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import './App.css';
function App() {
  const Weather = useWeather();
  console.log(Weather);
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={Weather.fetchData} value='Search' />
      <Card />
      <Button value='Refresh' />
    </div>
  );
}
export default App;