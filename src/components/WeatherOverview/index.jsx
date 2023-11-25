import { WeatherContainer } from './WeatherContainer';


export function WeatherOverview({
  city,
  description,
  max,
  min,
  temp,
  wind,
  humidity,
  icon
}) {
    const temp2 = Math.floor(temp);
  return (
    <WeatherContainer overviewBackground={mapColor(description)}>
      <div>
        <img src = {`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        <h2>{temp2}ºC</h2>
      </div>
      <div>
        <p>{mapDescription(description)}</p>
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
    Clear: '#EC6E4C',
    Clouds: '#808080',
    Rain: '#0b40a1',
    Snow: '#a6a6a6',
    Thunderstorm: '#5b0ba1',
    Drizzle: '#06949c',
    Mist: '#a6a6a6'
  };
  return colors[description] ?? '#808080';
}