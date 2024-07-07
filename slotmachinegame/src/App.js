import React from 'react'
import "./index.css"
import SlotM from './SlotM'


const App = () => {
  return (
    <>
    <h1 className='heading_style'> Welcome to <span style= {{fontWeight : 'bold'}}> Slot Machine Game</span></h1>
  <div className = "slotmachine">
    <SlotM x='A' y='A' z='C'/>
    <SlotM x='A' y='B' z='A'/>
    <SlotM x='A' y='A' z='A'/>
  </div>
   
    </>
   );
};


export default App;
