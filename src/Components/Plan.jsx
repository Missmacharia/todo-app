import React from 'react'

const Plan = ({item, handleDelete}) => {
    
  return (
    <div> 
      <h1>{item.plan} </h1>
      <p>{item.notes} </p>
      <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </div>
  )
}

export default Plan
