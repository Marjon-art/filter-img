import React from "react";
import { projects } from "../../data.js";
import { ProjectList } from "../ProjectlistComp/ProjectList.jsx"
import { Toolbar } from "../ToolbarComp/Toolbar.jsx";



export const Portfolio = () => {
const[selected, setSelected] = React.useState("All");
const[cotegoryId, setCotegoryId] = React.useState(projects);

const filter = (e) => {
  setSelected(e.target.textContent.trim()); 
  if (e.target.textContent.trim() === "All") {
    setCotegoryId(projects)
  } else {
    setCotegoryId(projects.filter( data => data.category === e.target.textContent.trim()))
  }
  
}
  return (
    <div className="container">
      <Toolbar
      filters={["All","Websites","Flayers","Business Cards"]}
      selected= {selected}
      onSelectFilter={filter}/>
      < ProjectList item={cotegoryId} />
    </div>
  ) 
}

