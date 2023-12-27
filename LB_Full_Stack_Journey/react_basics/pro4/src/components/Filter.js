import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="text-center m-5">
      {filterData.map((data) => (
        <button
          onClick={() => filterHandler(data.title)}
          key={data.id}
          className={` m-1 text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transtion-all duration-300 ${
            category === data.title
              ? "bg-opacity-60 border-white"
              : "bg-opacity-40 border-transparent"
          }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
