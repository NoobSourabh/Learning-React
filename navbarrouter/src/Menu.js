import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu =()=>{

    return(
        <>
        <NavLink exact className='active_class' to='/'>About Us </NavLink>
        <NavLink exact className='active_class' to='/contact'>Contact</NavLink>
        <br/> 
        </>
    )
}
export default Menu