import React, { useState } from "react";


const App = () =>{
  // const state = useState();
  const [num,setCount]=useState(0)
  const IncNum =()=>{
    setCount(num+1)
  }
  const reset =()=>{
    setCount(0)
  }
  const sub =()=>{
    if(num>0)
    setCount(num-1)
  }
  
return(
    <>
    <div>
    <h1>{num}</h1>
    <button onClick={IncNum}> Click Me!!</button>
    <button onClick={sub}>countdown</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default App;

