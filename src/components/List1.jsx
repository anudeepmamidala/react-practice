import React from 'react'

const List1 = (props) => {
  let names=['names','anu','uma','shannu']
  let persons=[
    {
        names : "anudeep",
        id : "1"
    },{
        names : "mahesh dalle",
        id :"2"
    }
  ]
    return (
    <div>
        {names.map((name,index)=>{
            return(
            <>
            <h2>{name}</h2>
            
            </>)
        })}
        {persons.map((person,index)=>{
            return(<>
            <h3>{person.names}</h3>
            <h3>{person.id}</h3>
            <p>{index}</p>
            </>)
        })}
        <p>{props.cls}</p>
    </div>
  )
}

export default List1