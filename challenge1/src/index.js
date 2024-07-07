import React from 'react'
import ReactDOM from 'react-dom'
const currentDate = new Date();
const time = currentDate.getHours();
var greet; 

var ccss = {
 
}


if(time<12){
  greet = 'Good Morning';
  ccss.color="red";
}else if(time>=12 & time<=16){
  greet = 'Good Afternoon';
  ccss.color="orange";
}
else {
  greet ='Good Evening';
  ccss.color="blue";
}
ReactDOM.render(
  <>
  <h1> Hello Sir <span style={ccss}>{greet}</span>
 </h1>
  </>
  ,document.getElementById('root')
)
