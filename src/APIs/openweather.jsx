import axios from "axios";
import Swal from "sweetalert2";
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
    Swal.fire({
      icon: "error",
      title: "Ops...",
      text: `Nenhuma cidade com esse nome encontrada`,
      showCloseButton: false,
    });}
    if (err.response.status === 429) {
      Swal.fire({
        icon: "error",
        title: "Ops...",
        text: `Numero máximo de requisições atingido`,
        showCloseButton: false,
      });}
  }
  }

export async function getWeatherFromCity(city) {
  try{  
    const response = await axios.get(`${URL}/weather?q=${city},BR&appid=${API_KEY}&lang=pt&units=metric`);

    const data = response.data;
   
    console.log(data)

    return {
      country: data.name,
      id: data.id,
      coord: data.coord,
      description: data.weather[0].main,
      temp: data.main.temp,
      min: data.main.temp_min,
      max: data.main.temp_max,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
    };
  } catch (err) {
    if (err.response.status === 404) {
  Swal.fire({
    icon: "error",
    title: "Ops...",
    text: `Nenhuma cidade com esse nome encontrada`,
    showCloseButton: false,
  });}
  if (err.response.status === 429) {
    Swal.fire({
      icon: "error",
      title: "Ops...",
      text: `Numero máximo de requisições atingido`,
      showCloseButton: false,
    });}
}
  }
