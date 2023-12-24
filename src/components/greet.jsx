import React from 'react'

const greet = (props) => {
  return (
    <div>
       <p> Good Morning {props.name}!!</p>
        You are:{props.cls} 

        {props.children}   
        </div>
  )
}

export default greet