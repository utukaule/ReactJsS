import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };
  const handleLowClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClearClick = (e) => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear text", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handlExtraSpaces = () => {
    let rmvSpaces = text.split(/[ ]+/);
    setText(rmvSpaces.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  };

  return (
    <>
      <div
        className={`container mb-3 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
      >
        <h4 className={`mt-5'}`} style={{
          color:props.mode === 'dark'?'white':'black',
        }}>{props.heading}</h4>

        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="3"
        ></textarea>

        <div className="mt-2">
          <button disabled={text.length ===0} className="btn btn-primary me-2" onClick={handleUpClick}>
            To UpperCase
          </button>

          <button disabled={text.length ===0} className="btn btn-primary me-2" onClick={handleLowClick}>
            To LowerCase
          </button>

          <button disabled={text.length ===0} className="btn btn-primary me-2" onClick={handleClearClick}>
            To ClearText
          </button>
          <button disabled={text.length ===0} className="btn btn-primary " onClick={handlExtraSpaces}>
            To Remove Extra Spaces
          </button>
        </div>
        <div>
          <h1 style={{color:"black"}}>Your text summary</h1>
          <p style={{color:"black"}}>
            {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters.
          </p>
          <p style={{color:"black"}}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
