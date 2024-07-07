import React from 'react'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Menu from './Menu'

import {Routes,Route} from 'react-router-dom'

const App=()=>{
  const Name = ()=>{
    return <h1> Hello , I am a Name Page</h1>
  }

  return(
    <>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<About/>} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="/contact/name" element={<Name />} />
      <Route element={<Error/>}></Route>
    </Routes>
  
    </>
  )

}
export default App