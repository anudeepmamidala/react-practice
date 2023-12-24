import React, { useState } from 'react'

const Fruits = () => {
    const  [Array,setArray]=useState(['apple','bannana'])
    const [toggle,setToggle]=useState(true)
    const change=()=>{
    if(toggle){
        setArray(['mango','orange'])
        setToggle(false)
    }
    else{
        setArray(['apple','bannana'])
        setToggle(true)
    }
    }
    
  return (
    <div>
    <ul>
        {Array.map((fruit)=>{
        return(<li>{fruit}</li>)    
        })}

        </ul>
        <button  onClick={change}>click me</button>
    </div>
  )
}

export default Fruits