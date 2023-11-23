import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { PageContainer } from './components/PageContainer';
import { CityForm } from './components/CityForm';
import { WeatherOverview } from './components/WeatherOverview';
import { WeatherBoard } from './components/WeatherBoard';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    loadData();
  }, [])

  function loadData() {
    const URL =  import.meta.env.VITE_API_URL
    //co nst KEY = import

    axios.get(`${URL}/todos`).then(({data}) => {
      console.log(data);
      setTodos(data)}).catch( e => {
        console.log(e)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
          showCloseButton: false,

        });
      })
  }


  return (
    <PageContainer>
      <TitleH1>Levo um casaquinho?</TitleH1>
      <CityForm loading={loading} onSubmit={onSubmit} />
      <WeatherOverview
        country={weather?.country}
        description={weather?.description}
        max={weather?.max}
        min={weather?.min}
        temp={weather?.temp}
      />
      <WeatherBoard forecast={forecast} />
    </PageContainer>
  );
}

export default App
