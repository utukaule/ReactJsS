import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          src={review.image}
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px] "></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-3xl capitalize">{review.name}</p>
      </div>

      <div className="text-center mt-3">
        <p className="text-violet-300 uppercase">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-4 mb-4">
        <FaQuoteLeft />
      </div>

      <div className="text-center text-slate-500">{review.text}</div>

      <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteRight />
      </div>

    </div>
  );
};

export default Card;
