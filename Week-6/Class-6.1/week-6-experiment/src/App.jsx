import  React, {Fragment} from "react";
import { useState } from "react";

let counter = 4

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to the gym",
    description: "go to gym today"
  }, {
    id: 2,
    title: "eat food",
    description: "eat food"
  }, {
    id: 3,
    title: "go to class",
    description: "go to class"
  }]);

 function addTodo(){
      setTodos([...todos, {  // spresd operator final aray gets added
        id:counter++ , 
        title: Math.random(),
        description: Math.random()
      }])
 }

  return (
    <div>
      <button onClick={addTodo}>add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)} // learn about keyid
     </div>
  )
}

function Todo({title , description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
 }

export default App