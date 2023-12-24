import React, { useState } from 'react'

const Form = () => {
    let initialdata={ name:'',age:''}
    const [data,setData]=useState(initialdata)
  return (
    <div>
        <p>Name</p>
        <input type="text" onChange={(e)=>{setData({...data,name:e.target.value})}} />
        <p>Age:</p>
        <input type="text" onChange={(e)=>{setData({...data,age:e.target.value})}}/>
        <h1>Data:</h1>
        <p>{data.name}</p>
        <p>{data.age}</p>
    </div>
  )
}

export default Form