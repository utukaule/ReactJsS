import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import './index.css'
const App = () => {
  return (
    <>
      <div>
        <div className="text-3xl font-bold flex justify-center">
          <h1>Random gif generator</h1>
        </div>
        <div className="text-center">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
};

export default App;
