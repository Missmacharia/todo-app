import React from "react";
import { useState } from "react";

const AddPlan = (props) => {
  const [plan, setPlan] = useState({
    plan: "",
    notes: "",
  });

  const handleChange = (e) => {
    setPlan((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.ceil(Math.random() * 100000)
    props.addPlan({...plan, id});

    setPlan({
      plan: "",
      notes: "",
    })
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
        name="plan"
          type="text"
          value={plan.plan}
          placeholder="Plan"
          onChange={handleChange}
        />
        <input
          type="text"
          name="notes"
          value={plan.notes}
          placeholder="Note"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlan;
