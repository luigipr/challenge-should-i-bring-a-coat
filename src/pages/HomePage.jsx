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
import { WeatherData } from "../components/WeatherData";

dayjs.locale('pt-br');

export default function Home() {
  const { forecast, weather, loading, searchForecast } = useWeather();
  const [dayNum, setDayNum] = useState(dayjs().format('dd/MM/YYYY'));
  const [hour, setHour] = useState(dayjs().format('HH:mm'));
  const [weeekday, setWeekday] = useState(dayjs().format('dddd'))
  const [city, setCity] = useState('brasilia')
  const [data, setData] = useState(true)
  const [board, setBoard] = useState(false)

  useEffect(() => {
    searchForecast(city);
    setDayNum(dayjs().format('DD/MM/YYYY'))
    setHour(dayjs().format('HH:mm'))
    setWeekday(dayjs().format('dddd'))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    const city = e.target["cidade"].value.trim();
        setCity(city)
        searchForecast(city);
  };
  function dataPage(){ 
    if(board) setBoard(false)
    if(!data) setData(true)
  }
  function boardPage(){
    if(!board) setBoard(true)
    if(data) setData(false)
  }
  let color= data ? '#222222' : '#C8C8C8';
  let color2= board ? '#222222' : '#C8C8C8';

  return (
    <PageContainer>
      <Left>
        <Header>
            <img src="../../public/casaco.png" />
            <Title>Levo um casaquinho?</Title>
        </Header>
        <CityForm loading={loading} onSubmit={onSubmit} />
        <WeatherOverview description={weather?.description} temp={weather?.temp}icon={weather?.icon}/>
        <Time>
            <p>{dayNum}</p>
            <p>{weeekday}, {hour}</p>
        </Time>
      <Footer>
        <p>Todos os direitos reservados. 2023.</p>
      </Footer>
      </Left>
      <Right>
        <SideHeader>
            <div>
            <h2 onClick={dataPage} style={{color}}>Hoje</h2>
            <h2 onClick={boardPage} style={{color: color2}}>Próximos dias</h2>
            </div>
            <h1>{city}</h1>
            <p>Lat: {weather?.coord.lat} Lon: {weather?.coord.lon}</p>
        </SideHeader>
        { data && <WeatherData max={weather?.max} min={weather?.min} wind={weather?.wind} humidity={weather?.humidity} /> }
        { board && <WeatherBoard forecast={forecast} /> }
        {weather?.temp < 17 ? 
        <p style={{color: "#AFADAD", fontStyle: 'italic' }}>Sim, você deve levar um casaquinho!</p> : 
        <p style={{color: "#222", fontStyle: 'italic' }}>Não, você não deve levar um casaquinho!</p>}
        <p>Dados fornecidos pela <a href="https://openweathermap.org/">Open Weather API</a></p>
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
    flex-direction: column;
    width: 1250px;
    height: 100vh;
    background: #EFEFEF;
    align-items: start;
    justify-content: left;
    padding-left: 30px;
`

const SideHeader = styled.div`
    padding-top: 50px;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 50px;

    div {
        display: flex;
        padding-bottom: 80px;
        gap: 50px;
    }

    h1 {
        font-size: 120px;
        padding-bottom: 10px;
    }

    p {
        font-size: 12px;
        font-weight: 200;
    }
`