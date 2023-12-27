import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // console.log(output)
      // output
    } catch (err) { 
      console.log("network me koi dikkat he");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-centern min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default App;
