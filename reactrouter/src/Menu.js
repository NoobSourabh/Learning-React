import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'

const Menu =()=>{
    return(
        <>
        <NavLink  to ="/"> About Us </NavLink>
        <NavLink  to='/contact' > Contact Us </NavLink>
        <NavLink to='/user/name/sname'>User</NavLink>
        <NavLink to="/search">Search</NavLink>

        
        </>
    )
        
    };

export default Menu;