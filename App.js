import React, { useEffect, useState } from 'react'


export default function App() {
 const data={
  name:'', email:'', password:''
 }
 const [inputdata, setinputdata]=useState(data)
 const [flag, setflag]=useState(false)

function handle_inputdata(e){
  setinputdata({...inputdata, [e.target.name]:e.target.value})
}

function handle_submit(e){
  e.preventDefault()
  if(!inputdata.name || !inputdata.email || !inputdata.password){
    alert('All fields are mandatory')
  }
  else{
    setflag(true)
  }
} 

  return (
 <>
 <pre>{flag ? <h2>Hello {inputdata.name}, your form is submitted successfully!</h2> :''}</pre>
<form onSubmit={handle_submit}>
  <input type="text" placeholder='enter name:' value={inputdata.name} name='name' onChange={handle_inputdata}/>
  <input type="text" placeholder='enter email:' value={inputdata.email} name='email' onChange={handle_inputdata}/>
  <input type="text" placeholder='enter password' value={inputdata.password} name='password' onChange={handle_inputdata}/>
  <button>Submit</button>
</form>
 </>
  )
}
