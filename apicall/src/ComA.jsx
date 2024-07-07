import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

const ComA =()=>{

    const [num, setNum] = useState();
    const [pokname,setname]=useState();
    useEffect(()=>{
        async function getData(){
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setname(res.data.name);
        }
    })

    return (
    <>
        <h1> you have chose {num}</h1>
        <h1> you have chose {pokname}</h1>
        <select value={num} onChange={(event)=>{
            setNum(event.target.value)
        }}>
            <option value ='1'> 1 </option>
            <option value ='25'> 25 </option>
            <option value ='3'> 3 </option>
            <option value ='4'> 4 </option>
            <option value ='6'> 6 </option>
        </select>
    </>
    )
}

export default ComA