import React from 'react'
import Plan from './Plan'
import './AllPlans.css'

const AllPlans = (props) => {


  return (
    <div>
      {
        props.plans?.map(plan => <Plan handleDelete={props.handleDelete} item= {plan} />)
      }
      {!props.plans?.length && <p>No Plan Made</p> }
    </div>
  )
}

export default AllPlans
