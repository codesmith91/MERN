// hook
import { useState } from "react";
//state , component
// let state = {
//   count: 0        // you cant define state like this 
// }
// todo application
function App() {
  const [count, setCount] = useState(0);

  // function onClickHandler(){
  //   // count = count + 1; // NOT the right way to set a state variable
  //   setCount(count + 1);
  // }

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

//component
function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
