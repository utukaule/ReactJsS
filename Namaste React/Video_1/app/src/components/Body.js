import RestaurantCard from "./RestaurantCard";
// import data from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [listofRestaurant,setListofRestaurant] = useState([])
  let listofRestaurants = [
    {
      id: "1",
      name: "Dominos",
      cuisines: ["pizza", "fase food", "ameriacan"],
      cost: "rs.400",
      deliveryTime: 34,
      avgRating: "4.5",
    },
    {
      id: "2",
      name: "kfc",
      cuisines: ["pizza", "fase food", "ameriacan"],
      cost: "rs.400",
      deliveryTime: 34,
      avgRating: "2.5",
    },
  ];
  return (
    <>
      <div className="body">
        {/* search */}
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              //   fitler logic here
              listofRestaurants = listofRestaurants.filter(
                (res) => res.avgRating > 4
              );
              console.log(listofRestaurants);
            }}
          >
            Top Rated
          </button>
        </div>
        {/* component for restro card */}
        <div className="res-container">
          {listofRestaurants.map((e) => {
            return (
              <div key={e.id}>
                <RestaurantCard menuName={e} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
