import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = (e) => {
        const upperCase = e.target.value.toUpperCase();
        const final = setText(upperCase);
        console.log(final)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
  return (
    <>
      <div className="container mb-3">
        
        <h4>{props.heading}</h4>
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>

        <div className="mt-2">

          <button className="btn btn-primary" onClick={handleUpClick}>To UpperCase</button>
          {text}
        </div>

      </div>
    </>
  );
};

export default TextForm;
