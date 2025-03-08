import React, { useState } from 'react'

const FilterButtons = () => {
	let categoryes = ['Movies','Cinema','Adventure','Comedy','Fantasy','History','Cartoon','Detective','Mysticism','Drama']
 
	const [active,setActive] = useState('Movies')
	return (
	<div className="filter__buttons">
	{
		categoryes.map((value,index)=>(
			<button 
			className={active === value ? 'active' : ''} 
			key={index}
			onClick={()=>setActive(value)}
			>
				{value}</button>
		))
	}
 </div>
  )
}

export default FilterButtons