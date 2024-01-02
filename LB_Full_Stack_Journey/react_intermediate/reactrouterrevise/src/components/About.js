import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function goHomeHandler() {
    navigate("/");
  }
  return (
    <>
      <div>About</div>
      <button onClick={goHomeHandler}>Go to home</button>
    </>
  );
};

export default About;
