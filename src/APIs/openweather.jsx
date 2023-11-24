import axios from "axios";
const URL =  import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getForecastFromCity(city) {
    const response = await axios.get(`${URL}/forecast?q=${city},BR&appid=${API_KEY}&lang=pt`);
    //axios.get('/forecast', { params: { q: country } });
    const forecasts = response.data.list ?? [];
    return forecasts.map((forecast) => {
      return {
        temp: forecast.main.temp,
        dt: forecast.dt,
      };
    });
  }

export async function getWeatherFromCity(city) {
    const response = await axios.get(`${URL}/weather?q=${city},BR&appid=${API_KEY}&lang=pt`);
    const data = response.data;
    return {
      country: data.name,
      id: data.id,
      coord: data.coord,
      description: data.weather[0].main,
      temp: data.main.temp,
      min: data.main.temp_min,
      max: data.main.temp_max,
    };
  }
