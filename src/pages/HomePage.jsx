import { CityForm } from "../components/CityForm";
import { WeatherOverview } from "../components/WeatherOverview";
import { useWeather } from "../hooks/useWeather";
import { WeatherBoard } from "../components/WeatherBoard";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";
import styled from "styled-components";

export default function Home() {
  const { forecast, weather, loading, searchForecast } = useWeather();

  const onSubmit = (e) => {
    e.preventDefault();
    const city = e.target["cidade"].value.trim();
    if (!city) return;
    searchForecast(city);
  };

  return (
    <PageContainer>
      <Left>
        <Title>Levo um casaquinho?</Title>
        <CityForm loading={loading} onSubmit={onSubmit} />
        <WeatherOverview
          city={weather?.city}
          description={weather?.description}
          max={weather?.max}
          min={weather?.min}
          temp={weather?.temp}
        />
      </Left>
      <Right>
        <WeatherBoard forecast={forecast} />
      </Right>
    </PageContainer>
  );
}

const Left = styled.div`
    width: 665px;

`

const Right = styled.div`
    display: flex;
    width: 1250px;
    background-color: #D8D8D8;
    align-items: center;
    justify-content: center;
`