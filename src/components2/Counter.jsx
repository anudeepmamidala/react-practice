import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const clickhandler=()=>{
            setCount(count+1)
    }
    const clickhandler1=()=>{
        setCount(count-1)
    }
    const clickhandler2=()=>{
        setCount(0)
    }
    const clickhandler3=()=>{
        setCount((prev)=>{
            return prev*2
        })
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={clickhandler}>Increment</button>
        <button onClick={clickhandler1}>Decrement</button>
        <button onClick={clickhandler2}>Reset</button>
        <button onClick={clickhandler3}>Make it double</button>
    </div>
  )
}

export default Counter