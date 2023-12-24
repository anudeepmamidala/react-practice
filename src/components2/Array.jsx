import React, { useState } from 'react'

const Array = () => {
    const [data,setData]=useState([])
    const [item,setItem]=useState('')
    
    const add=(item)=>{
        setData([...data,item])
    }
    const deletex=(index)=>{
        setData(()=>{
            return data.filter((ele,i)=>
                i!=index
            )
        })

    }
  return (
    <div>
        <p>Array</p>
        <input type="text" onChange={(e)=>{setItem(e.target.value)}} />
        <button onClick={()=>add(item)}>add</button>
    <ul>
    {data.map((item,index)=>{
        return(<><li >{item}</li>
        <button onClick={()=>{deletex(index)}}>Delete</button>
        
        </>)    
        })}
    </ul>
    </div>
  )
}

export default Array