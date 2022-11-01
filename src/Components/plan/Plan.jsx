import React from 'react'
import "./Plan.css"

const Plan = ({item, handleDelete}) => {
    
  return (
    <div> 
      <h1>{item.plan} </h1>
      <p>{item.notes} </p>
      <button onClick={()=>handleDelete(item.id)} className="delete_btn" >Delete</button>
    </div>
  )
}

export default Plan
