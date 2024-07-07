import React from 'react'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'
import User from './User'
import Search from './Search'
import {Routes,Route} from 'react-router-dom'

const App=()=>{
  const Name = ()=>{
    return <h1> Hello , I am a Name Page</h1>
  }

  return(
    <>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<About name="AboutUs"/>}/>
      <Route exact path='/contact' element={<Contact name ="Contact Us"/>}/>
      <Route exact path='/user/:fname/:lname' element={<User name = "User"/>}/>
      <Route exact path='/search' element ={<Search/>} />
      <Route path="/contact" element={<Name/>} />
      <Route path ="*" element={<Error/>}/>
    </Routes>
  
    </>
  )

}
export default App