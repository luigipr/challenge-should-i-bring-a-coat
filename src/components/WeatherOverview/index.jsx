import { WeatherContainer } from './WeatherContainer';


export function WeatherOverview({
  city,
  description,
  max,
  min,
  temp
}) {
  return (
    <WeatherContainer overviewBackground={mapColor(description)}>
      <div>
        <h2>Agora: {city}</h2>
        <p>Mínima: {min}ºC</p>
        <p>Máxima: {max}ºC</p>
      </div>
      <div>
        <p>{mapDescription(description)}</p>
        <h2>{temp}ºC</h2>
      </div>
    </WeatherContainer>
  );
}

function mapDescription(description = 'Tempo') {
  const weather = {
    Clear: 'Céu aberto',
    Clouds: 'Nublado',
    Rain: 'Chovendo',
    Snow: 'Nevando',
    Thunderstorm: 'Tempestade',
    Drizzle: 'Chuviscando',
    Mist: 'Neblina'
  };
  return weather[description] ?? description;
}

function mapColor(description = 'Tempo') {
  const colors = {
    Clear: '#aba91f',
    Clouds: '#808080',
    Rain: '#0b40a1',
    Snow: '#a6a6a6',
    Thunderstorm: '#5b0ba1',
    Drizzle: '#06949c',
    Mist: '#a6a6a6'
  };
  return colors[description] ?? '#808080';
}