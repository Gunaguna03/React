import React, { useEffect, useState } from 'react'
import './Singn.css'

function Sing() {
    const [name,setname]=useState("");
    const [valid,setValid]=useState(false)
    const [number,setNumber]=useState("")
    useEffect(()=>{
      if (name !=="" && number!==""){
        setValid(true)
      }
      else{
        setValid(false)
      }
    } ,[name,number])
    const handleSubmit =(e)=>{
      e.preventDefault();
      if(valid){
        alert("form Submitted")
      }
      else{
        alert("fill the form ")
      }
    }
    

  return (
    <div className='main2'>
      <div className="main">
        <form onSubmit ={handleSubmit}> 
            <input type="text" onChange={(e)=>setname(e.target.value)} value={name}/>
            <input type="number" onChange={(e)=>setNumber(e.target.value)} value={number} id='main1'/>
            <input type="Submit" />
        </form>
      
    </div>
    </div>
  )
}

export default Sing
