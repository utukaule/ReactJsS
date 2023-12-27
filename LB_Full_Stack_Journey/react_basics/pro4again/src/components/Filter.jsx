import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory
  function filterHandler(title){
    setCategory(title);
  }
  return (
    <>

     {filterData.map((item)=>(
      <button onClick={()=>filterHandler(item.title)} key={item.id}>{item.title}</button>
     ))}
    </>
  )
}

export default Filter
