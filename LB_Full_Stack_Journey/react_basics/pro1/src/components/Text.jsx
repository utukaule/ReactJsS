import React, { useState } from "react";

const Text = (props) => {
    const [txt, setTxt] = useState(props.text);
  const handleChnage = () => {
    setTxt("text is changed")
  };
  return (
    <>
      <div>{txt}</div>
      <button onClick={handleChnage}>Tap to change</button>
    </>
  );
};

export default Text;
