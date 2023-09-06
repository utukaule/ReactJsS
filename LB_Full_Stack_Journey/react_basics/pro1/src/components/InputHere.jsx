import React, { useState } from "react";

const InputHere = () => {
    const [change,setChange] = useState('');
    const [date, setDate] = useState('')
    const onChangeInput = (e) => {
        setChange(e.target.value);
    }
    const dateChangeInput = (e) => {
        setDate(e.target.value);
        console.log(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault();
        const proData = {
            title:change,
            date:date
        }
        console.log(proData)
        setChange('')
        setDate('')

    }
  return (
    <>
      <form onSubmit={submitHandle}>
        <label>Your name</label>
        <input type="text" value={setChange} onChange={onChangeInput} />
        <div>
          <label>date</label>
          <input type="date" value={setDate} onChange={dateChangeInput} min="2021-12-12" max="2023-01-01" />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
        <div>{change} {date}</div>
      </form>
    </>
  );
};

export default InputHere;
