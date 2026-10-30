
import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot } from "recoil";

 

function App() {
  return(
    <div> 
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  ) 
}

function Count() {
  return <div>
   <CountRender />
   <Buttons />
  </div>
} 

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons() {
const setCount = useRecoilState(countAtom)

 return <div>
  <button onClick={() => {
      setCount(count => + 1 )
  }}> Increase</button>
  
  <button onClick={() => {
     setCount(count => - 1)
  }}>Decrease</button>

 </div> 
}

export default App
