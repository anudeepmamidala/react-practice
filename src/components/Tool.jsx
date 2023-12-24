import React from 'react'
import './Tool.css'
import imagee from '../images/pukachu.jpg'
const Tool = () => {
  return (
    <div>
        <p className='back'>this is me</p>
        <img src={imagee}></img>
        <p style={{color : 'cyan'}}>this is other me</p>
    </div>
  )
}

export default Tool