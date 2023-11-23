import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Swal from 'sweetalert2';

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
    <>
  { todos.length > 0 ? 
  <>
    <ul>
      {todos.map((todo, i) => {
        return <li key={i}><input type="checkbox" checked={todo.completed} readOnly /> {todo.title}</li>
      }) }
    </ul>
    </>  : 'oops' }
    </>
  )
}

export default App
