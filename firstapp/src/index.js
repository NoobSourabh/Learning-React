// var React = require('react')
// var ReactDOM = require('react-dom')
import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
import name, {game} from './ImportExport'
import './index.css'
// ReactDOM.render('kya dikhana hai' , 'kaha dikhana hai','callback fun')
// ReactDOM.render(<h1> hello world</h1>, document.getElementById('root'))

// for multiple jsx elements in render method

// ReactDOM.render(
//     <React.Fragment >
//     <h1> hello world</h1>
//     <p> next jsx element </p>
//     <h2>react</h2>
//     </React.Fragment>,
//     document.getElementById('root')
// )


// use javascript in html tag
// const name='sourabh'
// ReactDOM.render(
//     <>
//     <h1> hello {name} </h1>
//     <p> my lucky number is{ 5+2   }</p>
//     </>,document.getElementById("root"))

    const fname ="sour"
    const lname ="chou"

    // ReactDOM.render(<>
    //     <h1>my name is {fname + " " + lname}</h1>
    //     </> ,
    //     document.getElementById('root'))

    // OR 
    // use backticks ` ` for template literals
    //  ReactDOM.render(
    //     <>
    //     <h1>{`my name is ${fname} and my  last name ${lname}`}</h1>
    //     </>
    //     ,document.getElementById("root")
    //  )


    // JSX attributes
    // const name="sourabhhh"
    // const links="www.google.com"
    // const img2="download (1).jpg"
    // const img1="mi.jpg"
    // ReactDOM.render( 
    //     // <h1 contentEditable ='true'>
    //     <>
    //     <h1 className="heading">
    //     My name is {name}</h1> 
    //    <div className="img_div">
    //     <img className="img1" src={img1} alt="random images"  />
    //     <a href={links} alt ="google"> 
    //         <img src={img2} alt ="random images"/>
    //     </a>
    //     </div>
    //     </>
    //     ,document.getElementById('root')
    // )




    // const heading = {
    //         color : 'blueviolet',
    //         textTransform : 'capitalize',
    //         textAlign : "center",
    //         textShadow : '0px 2px 4px'
    //     }
    // ReactDOM.render( 
        // <h1 contentEditable ='true'>
        // <h1 style={ {
            //     color : 'blueviolet',
            //     textTransform : 'capitalize',
            //     textAlign : 'center'
            // }}>
            // OR
    //         <>
    //     <h1 style={heading}>
    //     My name is {name}</h1> 
    //     <div className="img_div">
    //         <img className="img1" src={img1} alt="random images"  />
    //         <a href={links} alt ="google"> 
    //             <img src={img2} alt ="random images"/>
    //         </a>
    //         </div>
    //     </>
    //     ,document.getElementById('root')
    // )

    // .heading{
    //     color: blueviolet;
    //     text-align: center;
    //     text-transform:capitalize;
    //     font-weight: bold;
    //     margin:50px 0px
    // }

    // COMPONENTS
    ReactDOM.render(
        <>
        <h1>{game}</h1>       
        </>,document.getElementById('root')
    
    )