import React ,{useState} from 'react'

const App=()=>{
let curTime = new Date().toLocaleTimeString();

const UpdateTime =()=>{
  curTime  = new Date().toLocaleTimeString();
  setCtime(curTime)
}
setInterval(UpdateTime,1000);

const [ctime,setCtime]=useState(curTime)
  return(
    <>
    <div>
    <h1>{ctime}</h1>
    </div>
    </>
  );
}
export default App;