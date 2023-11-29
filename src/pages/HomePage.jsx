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
import { BringCoat } from "../components/BringCoat";
import { SideHeader } from "../components/SideHeader";

dayjs.locale('pt-br');

export default function Home() {
  const { forecast, weather, searchForecast } = useWeather();
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
  return (
    <PageContainer>
      <Left>
        <Header>
            <img src="../../public/casaco.png" />
            <Title>Levo um casaquinho?</Title>
        </Header>
        <CityForm onSubmit={onSubmit} />
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
        <SideHeader dataPage={dataPage} boardPage={boardPage} data={data} board={board} city={city} weather={weather} />
        { data && <WeatherData max={weather?.max} min={weather?.min} wind={weather?.wind} humidity={weather?.humidity} /> }
        { board && <WeatherBoard forecast={forecast} /> }
        <BringCoat weather={weather?.temp} />
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
    
    
    @media screen and (max-width: 412px) {
    width: 100%; /* Alterando o width para ocupar toda a largura */
    height: 700px;
    align-items: center;
  }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 75px;
      /* Estilos para a media query */
  @media screen and (max-width: 412px) {
    img{
      width: 80px;
    }
    width: 80%;
    padding: 15px 30px; /* Ajustando o padding para telas menores */
  }
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

    @media screen and (max-width: 412px) {
    width: 100%;
    height: 100%;
  }
`
