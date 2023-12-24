import React from 'react'

const Button = () => {
    const clickhandler =()=>{
        console.log("123")
    }
  
  
    return (
    <div>
        <button onClick={clickhandler}>click me!</button>
    </div>
  )
}

export default Button