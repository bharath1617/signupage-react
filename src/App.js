import React, { useState } from 'react';
import './App.css';

function App() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [mail, setMail] = useState("");
  let [conpass, setconPass] = useState("");
  let [error, seterror] = useState("");
  let [success, setsucc] = useState("");
  function Submit(){
      if(name === "" || pass === "" || mail === "" || conpass === ""){
        setsucc("")
        seterror("Error: All the fileds are mandatory")
      }
      else if(pass !== conpass){
        setsucc("")
        seterror("Error: Confirm Password must be same as Password")
      }
      else{
        seterror("")
        setsucc("Success: Successfully Signed up")
      }
  }
  return (
    <div className="App">
      <h1 className='head'>Signup</h1>
      <input className='name' type='text'
        onChange={(e) => setName(e.target.value)} value={name} placeholder='Full Name'>
      </input>
      <input className='email' type='text'
       onChange={(e) => setMail(e.target.value)} value={mail} placeholder='Email'>
      </input>
      <input className='Password' type='text'
       onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Password'>
      </input>
      <input className='Con-Password' type='text' 
       onChange={(e) => setconPass(e.target.value)} value={conpass} placeholder='Confirm Password'>
      </input>
      <div className='err'>{error}</div>

      <div className='succ'>{success}</div>
      <button onClick={Submit}>Submit</button>
    </div>
  );
}

export default App;
