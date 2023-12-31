import React, { useState } from "react";
import Card from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = (props) => {
  let reviews = props.reviews;
  let [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />
      <div></div>
      <div className="flex text-3xl mt-5 gap-5 text-violet-400 font-bold justify-center">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500 "
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500 "
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div className="mt-3">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
