import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();
  function homeHandler(){
    navigate('/')
  }
  function gobackHandler(){
    navigate(-1);
  }

  return (
    <>
      <div>contact page</div>
      <button className="border border-black " onClick={homeHandler}>move to home</button>
      <button className="border border-black" onClick={gobackHandler}>Go Back to previous page...</button>
    </>
  );
};

export default Contact;
