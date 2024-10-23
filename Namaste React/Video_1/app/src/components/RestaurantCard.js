const RestaurantCard = ({ menuName }) => {
  return (
    <>
      <div className="res-card">
        <img
          src={menuName.info.cloudinaryImageId}
          width="100px"
          height="100px"
          padding="5px"
          alt=""
        />
        <h3>{menuName.info.name}</h3>
        <h4>
          {menuName.cuisines &&
            menuName.cuisines.map((e, index) => <div key={index}>{e}</div>)}
        </h4>
        <h4>Cost: {menuName.info.costForTwo}</h4>
        <h4>{menuName.info.avgRating} stars</h4>
        {/* <h4>{menuName.deliveryTime} </h4> */}
      </div>
    </>
  );
};

export default RestaurantCard;
