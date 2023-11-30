import axios from "axios";
import { swallError } from "../helpers/errors";
const URL =  import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getForecastFromCity(city) {
  try {
  const response = await axios.get(`${URL}/forecast?q=${city},BR&appid=${API_KEY}&lang=pt&units=metric`);
    const forecasts = response.data.list ?? [];
    return forecasts.map((forecast) => {
      return {
        temp: forecast.main.temp,
        dt: forecast.dt,
      };
    });} catch (err) {
    if (err.response.status === 404) {
    swallError('Nenhuma cidade com esse nome encontrada')}
    if (err.response.status === 429) {
      swallError('Numero máximo de requisições atingido')}
    }
  }

export async function getWeatherFromCity(city) {
  try{  
    const response = await axios.get(`${URL}/weather?q=${city},BR&appid=${API_KEY}&lang=pt&units=metric`);
    return {
      coord: response.data.coord,
      description: response.data.weather[0].main,
      temp: response.data.main.temp,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    };
  } catch (err) {
    if (err.response.status === 404) {
      swallError('Nenhuma cidade com esse nome encontrada')}
    if (err.response.status === 429) {
      swallError('Numero máximo de requisições atingido')}
    }
}
