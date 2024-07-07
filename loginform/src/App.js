import React , {useState} from 'react'

const App = () =>{

  const[lastname,setLastName]=useState("");
  const inputEvent2 =(event)=>{
    setLastName(event.target.value);
  };
  
  const[fullLastName,setFullLastName]=useState("");




  const[name,setName]= useState('');
  const inputEvent =(event)=>{
    setName(event.target.value)
  };

  const[fullName,setFullName]=useState('');
  const onSubmits = (event)=>{
    event.preventDefault();
    setFullName(name);
    setFullLastName(lastname);
  };


return(
  <>
    <div className='main_div'>
      <div>
        <h1>Hello {fullName} {fullLastName}</h1>
        <input 
          type='text'
          placeholder='Enter your Name'
          onChange={inputEvent}
          value={name}
          />
        <input 
          type='text'
          placeholder='Enter your Name'
          onChange={inputEvent2}
          value={lastname}
          />
          <button onClick={onSubmits}>Submit</button>
      </div>
    </div>

  </>
)

}

export default App;