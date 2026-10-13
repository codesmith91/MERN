import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Todos } from './components/Todos'
import './App.css'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todo")
  .then (async (res) => {
    const json = await res.json();
    setTodos(json,todos)
  })

  return (
    <div>   
      <CreateTodo></CreateTodo>
      <Todos todos={todos}> </Todos>
    </div>
  )
}

export default App
