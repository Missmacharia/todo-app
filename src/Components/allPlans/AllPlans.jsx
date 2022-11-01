import React from 'react'
import Plan from '../plan/Plan'
import './AllPlans.css'

const AllPlans = (props) => {


  return (
    <div className='add_plan'>
      {
        props.plans?.map(plan => <Plan handleDelete={props.handleDelete} item= {plan} />)
      }
      {!props.plans?.length && <p>No Plan Made</p> }
    </div>
  )
}

export default AllPlans
