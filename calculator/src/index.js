import React from 'react'
import ReactDOM from 'react-dom'
import {add,div,sub,multi} from './Calc'
ReactDOM.render(
<>
<ul>  
<li>sum of two no if {add(30,3)}</li>
<li>sub of two no if {sub(30,3)}</li>
<li>div of two no if {div(30,3)}</li>
<li>multi of two no if {multi(30,3)}</li>
</ul>
</>,
document.getElementById('root')
)