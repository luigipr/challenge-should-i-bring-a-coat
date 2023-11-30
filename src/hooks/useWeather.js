import { useState } from 'react';
import { getForecastFromCity, getWeatherFromCity } from '../APIs/openweather';


export function useWeather() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchForecast = async (city) => {
    setLoading(true);
    const [weather, forecast] = await Promise.all([
      getWeatherFromCity(city),
      getForecastFromCity(city)
    ]);
    setLoading(false);
    setWeather(weather);
    setForecast(forecast);
  };
  return { weather, forecast, loading, searchForecast
  };
}