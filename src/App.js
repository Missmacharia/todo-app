import AddPlan from "./Components/AddPlan";
import { useEffect, useState } from "react";
import AllPlans from "./Components/AllPlans";

function App() {
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);

  const [search, setSearch]= useState("")
  const handlePlan = (newPlan) => {
    let afterAdd = [...plans, newPlan]
    setPlans(afterAdd);
    setFilteredPlans(afterAdd);

    localStorage.setItem('plans', JSON.stringify(afterAdd))
  };

  const handleSearch = e=>{
    let {value} = e.target
    setSearch(value);
    
    if(value !== ""){
      const searched = plans.filter(p=>p.plan.toLowerCase().includes(value.toLowerCase()))
      setFilteredPlans(searched)
    }else{
      setFilteredPlans(plans)
    }
  }

  const handleDelete = id => {
    const newPlans = plans.filter(p=>p.id !==id);
    setPlans(newPlans);
    setFilteredPlans(newPlans);
    localStorage.setItem('plans', JSON.stringify(newPlans))
  }

  useEffect(()=>{
    let plans = localStorage.getItem('plans')
    if(plans){
      plans = JSON.parse(plans)
      setPlans(plans);
      setFilteredPlans(plans);
    }
  }, [plans])

  return (
    <div>
      {/* Search Plans */}
      <input value={search} onChange={handleSearch} type="search" placeholder="Search here" />
      <AddPlan addPlan={handlePlan} />
      <AllPlans handleDelete={handleDelete} plans={filteredPlans} />
    </div>
  );
}

export default App;
