import React from 'react'
import  { useParams, useLocation ,useNavigate} from 'react-router-dom'
// const User =({match})=>{
// return(
//     <h1>Hello {match.params.fname}</h1>
// )
// }


const User =()=>{
    const {fname,lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return(<>
        <h1> user {fname} {lname} page</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/srb/nub` ?
        <button onClick = {()=>
           navigate('/')
        }> Click me </button>: null  }
        </>
        )
}
export default User;