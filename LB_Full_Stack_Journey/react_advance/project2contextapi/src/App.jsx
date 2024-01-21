import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Blogs/>
        <Pagination/>
      </div>
    </>
  );
};

export default App;
