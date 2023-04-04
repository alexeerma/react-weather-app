import { useState } from 'react';
import './index.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  
  const API_KEY = 'ca5c4991c00b244edf4a88fa6d522468';
    
  const searchWeather = async (e) => {
    e.preventDefault();
    
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = response.data;
    
    setWeather({
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    });
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <form onSubmit={searchWeather}>
          <input type="text" placeholder="Enter city name" className="w-full p-2 rounded-md border-gray-300" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2">Search</button>
        </form>
        
        {weather.temperature && (
          <div className="bg-white rounded-md shadow-md p-4 mt-4">
            <h2 className="text-xl font-bold">{city}</h2>
            <p className="text-gray-500">{weather.temperature}°C</p>
            <p className="text-gray-500">Feels like: {weather.feelsLike}°C</p>
            <p className="text-gray-500">Humidity: {weather.humidity}%</p>
            <p className="text-gray-500">Wind speed: {weather.windSpeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;



