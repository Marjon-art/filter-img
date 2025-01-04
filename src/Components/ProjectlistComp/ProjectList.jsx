
export function ProjectList(projects) {
   const projectList = projects.item.map((item) => {
    return  <img src={item.img} alt={item.category}/>
  })
  return (
    <div>
      
     <>{projectList}</>
    </div>

  )
}















/*
{filters.map((item) => { return <button onClick={onSelectFilter}>{item}</button>})}
*/