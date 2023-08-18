import React, { useState } from "react";

export const TextForm = (props) => {
    const [text, setText] = useState('')
    
    const handleToUpperCase = () => {
        let toUpper = text.toUpperCase()
        setText(toUpper);   
        props.showAlert('Converted to upper case','done')
    }
    const handleToLowerCase = () => {
        let toLower = text.toLowerCase();
        setText(toLower);
        props.showAlert('Converted to lower case','done')
    }
    const handleToClearCase = () => {
        let toClear = "";
        setText(toClear)
        props.showAlert('Clear text','done')
    }

    const handlExtraSpaces = () =>{
      let rmvSpaces = text.split(/[ ]+/);
      setText(rmvSpaces.join(" "));
      props.showAlert('removed extra spaces','done')
    }
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <textarea className="form-control" rows="3" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={handleToUpperCase}>UpperText</button>
          <button className="btn btn-primary ms-3" onClick={handleToLowerCase}>LowerText</button>
          <button className="btn btn-primary ms-3" onClick={handleToClearCase}>ClearText</button>
          <button className="btn btn-primary ms-3" onClick={handlExtraSpaces}>Remove extra spaces</button>
        </div>
        <p>{text}</p>
        <p>Total alphabets {text.length}</p>
        <p>Total words {text.split(" ").length -1}</p>
        <p></p>
      </div>
    </>
  );
};
