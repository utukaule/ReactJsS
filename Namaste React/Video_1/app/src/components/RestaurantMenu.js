import React, { useEffect, useState } from "react";
import Shimemr from "./Shimemr";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {MENU_API} from '../utils/constants'
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const {resId} = useParams()
  // console.log(params)

  const resInfo = useRestaurantMenu(resId)
  

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
            <>
            <li style={{marginBottom:'30px'}} key={item.card.info.id}>
              {item.card.info.name} - ₹{item.card.info.price / 100}/-
            <Link className="" style={{backgroundColor:"black",color:"white",padding:"10px 5px"}} >+Add</Link>
            </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
