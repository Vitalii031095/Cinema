import React, { useState } from 'react';


const FilterCategories = () => {
	 const [status, setStatus] = useState("Popular")
	 let filter_categoryes = ["Popular", "Novelty", "Featured", "Short films"]
  return (
	<div id="categoryes" className="filter__categoryes anchor">
	<div  className="filter__categoryes-flex">
	{filter_categoryes.map((categoryes,index)=>(
	  <div key={index} 
	  onClick={()=>setStatus(categoryes)} 
	  className={`filter__categoryes-item ${categoryes===status ? "active-category": ""}`}>
			  <p>{categoryes}</p>
			  <span></span>
		 </div>
	))}
		 
	  
	</div>
	<span></span>
</div>
  )
}

export default FilterCategories