import React from "react";
import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with utuChann</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        //   {...tour} passing copy of tour object (clonning) 
        })}
      </div>
    </div>
  );
};

export default Tours;
