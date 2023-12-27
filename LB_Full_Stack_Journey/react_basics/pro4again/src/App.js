import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
function App() {
  let [courses, setCourses] = useState(null);
  let [loading, setLoading] = useState(true);
  let [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // console.log(output.data)
    } catch (err) {
      console.log("data is not coming");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div>
        {loading?<Loading/>:<Cards courses={courses} category={category}  />}
        
      </div>
    </>
  );
}

export default App;
