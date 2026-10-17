// import { useEffect, useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   useEffect(()=> {
//     axios.get("")
//     .then(function(response){
//       setTodos(response.date.todos)
//     })
//   }, []); 

//   return (
//     <>
//       {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
//     </>
//   )
// }

// function Todo({title, description}) {
//     return <div>
//       <h1>{title}</h1>
//       {description}
//     </div>
// }

// export default App

import { memo, useState, useCallback } from "react";

function App() {
  const [count , setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("hi there");
  },[])

  return <div>
    <ButtonComponent inputFunction={inputFunction}></ButtonComponent>
    <button onClick={() => {
      setCount( count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render")

  return <div>
    <button> button clicked</button>
  </div>
})

export default App;