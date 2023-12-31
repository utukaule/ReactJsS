import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      
      <div className="text-center">
        
        <div className="">
          <h1 className="text-4xl font-bold">Our Testimonias</h1>
        </div>
       
        <div className="bg-violet-400 h-[4px] w-1/3 mx-auto mt-1"></div>
       
        <Testimonial reviews={reviews} />
     
      </div>
    
    </div>
  );
};

export default App;
