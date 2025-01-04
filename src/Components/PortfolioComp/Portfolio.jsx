import React from "react";
import { projects } from "../../data.js";
import { ProjectList } from "../ProjectlistComp/ProjectList.jsx"
import { Toolbar } from "../ToolbarComp/Toolbar.jsx";




export const Portfolio = () => {
const[selected, setSelected] = React.useState("All");

const filter = (e) => {
  setSelected(e.target.textContent.trim());
}
  return (
    <div className="container">
    <Toolbar
    filters={["All","Websites","Flayers","Business Cards"]}
    selected= {selected}
    onSelectFilter={(filter) => {console.log(filter);}}/>
    < ProjectList item={projects}/>
    </div>
  ) 
}

