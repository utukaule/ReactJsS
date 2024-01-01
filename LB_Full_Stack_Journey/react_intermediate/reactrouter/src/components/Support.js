import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function homeHandler(){
    navigate("/")
  }
  function gobackHandler(){
    navigate(-1)
  }
  return (
    <>
      <div>Support page</div>
      <button className="border border-black" onClick={homeHandler}>Go to Home page</button>
      <button className="border border-black" onClick={gobackHandler}>go back</button>
    </>
  );
};

export default Support;
