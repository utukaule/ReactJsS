import React, { useEffect, useState } from "react";
import Shimemr from "./Shimemr";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MENU_API} from '../utils/constants'
function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams()
  // console.log(params)
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  if (resInfo == null) return <Shimemr />;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
    costForTwoMessage,
    id,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);
  return resInfo === null ? (
    <Shimemr />
  ) : (
    <div className="" menu>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹{item.card.info.price / 100}/-
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
