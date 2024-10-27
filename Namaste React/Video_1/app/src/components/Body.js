import RestaurantCard, { ratingOnTheTop } from "./RestaurantCard";
// import resData from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimemr from "./Shimemr";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const RatingOnTheTop = ratingOnTheTop(RestaurantCard);

const Body = () => {
  // const [listofRestaurants, setListofRestaurant] = useState([]);
  // const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  // const [searchText, setSearchText] = useState("");

  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listofRestaurants);
  useEffect(() => {
    fetchData();
    console.log("USEffect array");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setListofRestaurant(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterdRestaurant(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like u r offline please check your internet connection</h1>
    );

  return listofRestaurants.length === 0 ? (
    <Shimemr />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          {/* search field */}
          <div className="search">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <button
              className=""
              onClick={() => {
                const fiterRestaurant = listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // setListofRestaurant(fiterRestaurant);
                setFilterdRestaurant(fiterRestaurant);
              }}
            >
              search
            </button>
          </div>

          {/* top rated restaurant */}
          <button
            className="filter-btn"
            onClick={() => {
              const filteredRestro = listofRestaurants.filter(
                (e) => e.info.avgRating > 4.5
              );
              setListofRestaurant(filteredRestro);
            }}
          >
            Top Restaurants
          </button>
        </div>

        {/* body to show cards */}
        <div className="res-container">
          {filterdRestaurant.map((e) => {
            return (
              <Link key={e.info.id} to={"/restaurants/" + e.info.id}>
                {/* {we have show actually promoted but now we are showing id on the top 
                main purpose is to learn what is higher order function } */}
                {e.info.areaName === 'Baner' ? (
                  <RatingOnTheTop menuName={e} />
                ) : (
                  <RestaurantCard menuName={e} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
