import {
    PageContainer,
    TitleH1,
    WeatherChart,
    WeatherOverview
  } from '@/components';
  import CityForm from '../components/CityForm'
  import { useWeather } from '@/hooks/useWeather';
  
  
  export default function Home() {
    const { forecast, weather, loading, searchForecast } = useWeather();
  
    const onSubmit = (e) => {
      e.preventDefault();
      const city = e.target['city'].value.trim();
      if (!city) return;
      searchForecast(city);
    };
  
    return (
      <PageContainer>
        <TitleH1>Levo um casaquinho?</TitleH1>
        <CityForm loading={loading} onSubmit={onSubmit} />
        <WeatherOverview
          city={weather?.city}
          description={weather?.description}
          max={weather?.max}
          min={weather?.min}
          temp={weather?.temp}
        />
        <WeatherChart forecast={forecast} />
      </PageContainer>
    );
  }