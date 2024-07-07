import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'




const App = () =>{

  <>
  <h1 className='heading_style'>Must Watch Movies</h1>
  {Sdata.map((val) => {
    return(
      <Cards
      key = {val.id}
      imgsrc = {val.imgsrc}
      title = {val.title}
      sname = {val.sname}
      link =  {val.link}
      />
      )
    })}
    
    </>
  }
  export default App



// function ncard(val){
  //   return(
    //     <Cards
    //       imgsrc = {val.imgsrc}
    //       title = {val.title}
//       sname = {val.sname}
//       link =  {val.links}
//     />
//   )
// }




// {Sdata.map(function ncard(val){
  //   return(
    //     <Cards
//       imgsrc = {val.imgsrc}
//       title = {val.title}
//       sname = {val.sname}
//       link =  {val.links}
//     />
//   )
// })}


//  <Cards
// imgsrc=""
// title="Top Hits"
// sname="Game Of Thrones"
// link=""
// />
// <Cards
// imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxl3SKLfCXtdP9h4_KujRR3Aw1bAXcOZ_y0ApXAHO3A&s"
// title="Disney"
// sname="How To Train Your Dragon"
// link="https://www.primevideo.com/dp/amzn1.dv.gti.b8b02e3f-9ef9-d61c-e2a3-050bd9ad1c66?autoplay=0&ref_=atv_cf_strg_wb"
// />
// <Cards
// imgsrc="https://i.pinimg.com/474x/ba/56/fd/ba56fd126e21af1d8dbdcdd82513e997.jpg"
// sname="Angry Birds"
// title="Pixar Animation"
// link="https://www.primevideo.com/dp/amzn1.dv.gti.b8b02e3f-9ef9-d61c-e2a3-050bd9ad1c66?autoplay=0&ref_=atv_cf_strg_wb"
// />


// <Cards
// imgsrc={Sdata[0].imgsrc}
// title={Sdata[0].title}
// sname={Sdata[0].sname}
// link={Sdata[0].link}
// />
  
// <Cards
// iimgsrc={Sdata[1].imgsrc}
// title={Sdata[1].title}
// sname={Sdata[1].sname}
// link={Sdata[1].link}
// />

// <Cards
// imgsrc={Sdata[2].imgsrc}
// title={Sdata[2].title}
// sname={Sdata[2].sname}
// link={Sdata[2].link}
// />
