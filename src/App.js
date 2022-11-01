import AddPlan from "./Components/addPlan/AddPlan";
import { useEffect, useState } from "react";
import AllPlans from "./Components/allPlans/AllPlans";
import "./App.css"

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
    <div className="app_cont">
      {/* Search Plans */}
      <div className="srch__btn">
      <input className="search_btn" value={search} onChange={handleSearch} type="search" placeholder="Search here" />
      </div>
      <div className="app">
      <AddPlan addPlan={handlePlan} />
      <AllPlans handleDelete={handleDelete} plans={filteredPlans} />
      </div>
     
    </div>
  );
}

export default App;
