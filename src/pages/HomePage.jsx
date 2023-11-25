import { CityForm } from "../components/CityForm";
import { WeatherOverview } from "../components/WeatherOverview";
import { useWeather } from "../hooks/useWeather";
import { WeatherBoard } from "../components/WeatherBoard";
import { PageContainer } from "../components/PageContainer";
import { Title } from "../components/Title";
import styled from "styled-components";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import { Time } from "../components/Time";
import { Footer } from "../components/Footer";
import Swal from "sweetalert2";

dayjs.locale('pt-br');

export default function Home() {
  const { forecast, weather, loading, searchForecast } = useWeather();
  const [dayNum, setDayNum] = useState(dayjs().format('dd/MM/YYYY'));
  const [hour, setHour] = useState(dayjs().format('HH:mm'));
  const [weeekday, setWeekday] = useState(dayjs().format('dddd'))
  const [city, setCity] = useState('brasilia')

  useEffect(() => {
    searchForecast(city);
    setDayNum(dayjs().format('DD/MM/YYYY'))
    setHour(dayjs().format('HH:mm'))
    setWeekday(dayjs().format('dddd'))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    const city = e.target["cidade"].value.trim();
    if (!city) return Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "cidade não existe!",
        showCloseButton: false,
      });
    
    try {
        setCity(city)
        searchForecast(city);  
    } catch (error) {
         Swal.fire({
            icon: "error",
            title: "Ops...",
            text: "Muitas requisições ao servidor!",
            showCloseButton: false,
          });
    }
  };

  return (
    <PageContainer>
      <Left>
        <Header>
            <img src="../../public/casaco.png" />
            <Title>Levo um casaquinho?</Title>
        </Header>
        <CityForm loading={loading} onSubmit={onSubmit} />
        <WeatherOverview
          city={weather?.city}
          description={weather?.description}
          max={weather?.max}
          min={weather?.min}
          temp={weather?.temp}
          wind={weather?.wind}
          humidity={weather?.humidity}
          icon={weather?.icon}
        />
        <Time>
            <p>{dayNum}</p>
            <p>{weeekday}, {hour}</p>
        </Time>

      <Footer>
        <p>Todos os direitos reservados. 2023.</p>
      </Footer>
      </Left>
      <Right>
        <WeatherBoard forecast={forecast} />
      </Right>
    </PageContainer>
  );
}

const Left = styled.div`
    background: #FFFFFF;
    width: 665px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    
    
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 75px;
`

const Right = styled.div`
    display: flex;
    width: 1250px;
    height: 100vh;
    background: #EFEFEF;
    align-items: center;
    justify-content: center;
`