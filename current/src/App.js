import React, { useState } from "react";
const App =()=>{
let newtime = new Date().toLocaleTimeString();
  const [curTime,SetTime]=useState(newtime);

const UpdateTime=()=>{
  newtime = new Date().toLocaleTimeString();
  SetTime(newtime)
}


return(
  <>
  <div>
  <h1>{currTime}</h1>
  <button onClick={UpdateTime}>current time</button>
  </div>
  </>
  )
}
  
  export default App