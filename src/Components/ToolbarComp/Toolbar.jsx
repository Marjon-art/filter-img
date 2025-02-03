import React from 'react';
import "./style.css";


export  function Toolbar({filters, selected, onSelectFilter}) { 
   return (
      <div className="butns">
          {filters.map((item) => { return <button className={selected === item ? "active" : " "} onClick={onSelectFilter}>{item}</button>}
   )}
       </div>
  )
}













